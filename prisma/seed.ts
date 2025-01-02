import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

async function main() {
  const data = fs.readFileSync(path.join(process.cwd(), 'data/known_scope_data.txt'), 'utf-8')
  const players = data
    .split('--------------------------------------------------------------------------------')
    .map(block => block.trim())
    .filter(block => block)
    .map(block => {
      try {
        return JSON.parse(block)
      } catch (e) {
        console.error('Failed to parse block:', block)
        return null
      }
    })
    .filter(player => player !== null && player.name)

  for (const player of players) {
    await prisma.player.create({
      data: {
        name: player.name,
        age: player.age || null,
        position: player.position || null,
        foot: player.foot || null,
        height: player.height || null,
        weight: player.weight || null,
        goals_per90: player.goals_per90 || null,
        assists_per90: player.assists_per90 || null,
        goals_assists_per90: player.goals_assists_per90 || null,
        goals_pens_per90: player.goals_pens_per90 || null,
        goals_assists_pens_per90: player.goals_assists_pens_per90 || null,
        xg_per90: player.xg_per90 || null,
        xg_assist_per90: player.xg_assist_per90 || null,
        xg_xg_assist_per90: player.xg_xg_assist_per90 || null,
        npxg_per90: player.npxg_per90 || null,
        npxg_xg_assist_per90: player.npxg_xg_assist_per90 || null,
      }
    })
  }

  console.log('Database has been seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })