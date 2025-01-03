'use client'

import { useState } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatInterface() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    const userMessage: Message = { role: 'user', content: question }
    setMessages(prev => [...prev, userMessage])
    setLoading(true)
    setQuestion('')

    try {
      const previousMessages = messages.map(m => m.content)
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question,
          previousMessages 
        })
      })
      
      const data = await res.json()
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response || data.error
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Failed to get response'
      }
      setMessages(prev => [...prev, errorMessage])
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col h-screen bg-green-600 text-white p-4">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        ⚽ Soccer Stats Chat
      </h1>
      <div className="flex-grow overflow-auto mb-4 bg-green-700 rounded-lg p-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
          >
            <span className={`inline-block p-2 rounded-lg ${
              message.role === 'user' 
                ? 'bg-white text-green-800' 
                : 'bg-green-800 text-white'
            }`}>
              {message.content}
            </span>
          </div>
        ))}
        {loading && (
          <div className="text-left">
            <span className="inline-block p-2 rounded-lg bg-green-800 text-white">
              AI is thinking...
            </span>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about a player (e.g., 'How many goals does Cole Palmer score?')"
          className="flex-grow p-2 rounded-l-lg text-green-800"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-white text-green-600 p-2 rounded-r-lg hover:bg-green-100 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}
