import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // Simple mock AI responses - replace with actual AI API integration
    const mockResponses = [
      "I'm an AI agent here to help you! I can answer questions, provide information, and assist with various tasks.",
      "That's an interesting question! Let me help you with that.",
      "I understand what you're asking. Here's what I can tell you:",
      "Great question! Based on my knowledge, here's my response:",
      "I'm here to assist you. Let me provide you with helpful information.",
      "Thanks for asking! I'll do my best to help you with that.",
    ]

    const userMessage = messages[messages.length - 1].content.toLowerCase()

    let response = ''

    if (userMessage.includes('hello') || userMessage.includes('hi')) {
      response = "Hello! I'm AI Agent Bot, your intelligent assistant. How can I help you today?"
    } else if (userMessage.includes('who are you') || userMessage.includes('what are you')) {
      response = "I'm AI Agent Bot, an intelligent AI assistant designed to help answer questions and assist with various tasks. I'm built with Next.js and designed to provide helpful, conversational responses."
    } else if (userMessage.includes('help')) {
      response = "I'm here to help! You can ask me questions, request information, or just have a conversation. I can assist with:\n\n- Answering general questions\n- Providing information on various topics\n- Having casual conversations\n- Helping with problem-solving\n\nWhat would you like to know?"
    } else if (userMessage.includes('weather')) {
      response = "I don't have real-time weather data access, but I'd be happy to discuss weather patterns, climate, or help you find weather resources!"
    } else if (userMessage.includes('thank')) {
      response = "You're welcome! Is there anything else I can help you with?"
    } else {
      // Generate a contextual response
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
      response = `${randomResponse}\n\nYou asked: "${messages[messages.length - 1].content}"\n\nI'm a demo AI agent, so my responses are simulated. In a production environment, I would integrate with advanced AI APIs like OpenAI, Anthropic Claude, or other LLMs to provide more sophisticated responses.`
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 })
  }
}
