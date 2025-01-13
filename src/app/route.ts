import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { analyzeQuestion } from '@/utils/openai'
import { getPhysicalCharacteristics, getHeight, getWeight, getFootedness } from '@/utils/playerAttributes'
import OpenAI from 'openai'
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions'

// Initialize Prisma client
const prisma = new PrismaClient()

// Initialize OpenAI client
const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  console.error('Warning: Missing OPENAI_API_KEY environment variable')
}

const openai = new OpenAI({
  apiKey: apiKey || '', // Provide empty string as fallback
})

export async function POST(request: Request) {
  try {
    const { question } = await request.json()
    
    const playerName = await analyzeQuestion(question)
    
    // Handle pronoun references
    if (!playerName && (
      question.toLowerCase().includes('he') || 
      question.toLowerCase().includes('his') ||
      question.toLowerCase().includes('him')
    )) {
      const lastPlayer = await prisma.player.findFirst({
        orderBy: { updatedAt: 'desc' }
      })
      if (lastPlayer) {
        const response = await generateNaturalResponse(question, lastPlayer)
        return NextResponse.json({ response })
      }
    }

    // Handle non-player questions
    if (!playerName) {
      return NextResponse.json({ 
        response: "I can only help you with questions about soccer players. What player would you like to know about?"
      })
    }

    // Find player in database
    const player = await prisma.player.findFirst({
      where: {
        OR: [
          { name: { equals: playerName, mode: 'insensitive' } },
          { name: { contains: playerName, mode: 'insensitive' } },
          { name: { contains: playerName.split(' ')[0], mode: 'insensitive' } },
          { name: { contains: playerName.split(' ').slice(-1)[0], mode: 'insensitive' } },
        ]
      }
    })

    if (!player) {
      return NextResponse.json({ 
        response: `I don't have any data for ${playerName} in my database. Please ask about another player.`
      })
    }

    // Update last accessed timestamp
    await prisma.player.update({
      where: { id: player.id },
      data: { updatedAt: new Date() }
    })

    const response = await generateNaturalResponse(question, player)
    return NextResponse.json({ response })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ 
      response: error instanceof Error ? error.message : "Failed to process request"
    })
  }
}

async function generateNaturalResponse(question: string, player: any): Promise<string> {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: `You are a soccer stats assistant. Follow these rules STRICTLY:
      1. Never use quotation marks in your responses.
      2. If the user ONLY mentions a player's name with no specific question, respond EXACTLY in this format:
      [Name] is a [age]-year-old [position] who primarily plays as [position description].

      3. Use EXACTLY these stats, no interpretation:
      ${JSON.stringify(player, null, 2)}
      
      4. If asked what stats are available or what they mean, explain these metrics:
      - Basic: age, position, foot, height, weight
      - Per 90 minutes: goals, assists, goals+assists (combined)
      - Expected Goals (xG): A statistical measure that rates how likely a shot is to result in a goal
      - Expected Assists (xA): Similar to xG, but measures the likelihood of a pass becoming an assist
      - Non-penalty xG (npxG): Expected goals excluding penalties
      
      5. When showing stats:
      - xG = expected goals
      - xA = expected assists
      - npxG = non-penalty expected goals
      
      6. Answer ONLY what is asked, do not volunteer additional information.
      7. Never wrap responses in quotation marks.`
    },
    {
      role: "user",
      content: question
    }
  ]

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0.1,
  })

  return response.choices[0].message.content?.replace(/['"]/g, '') || 'Sorry, I could not generate a response.'
}
