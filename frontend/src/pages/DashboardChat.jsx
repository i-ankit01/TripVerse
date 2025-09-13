import React, { useState } from 'react'

/**
 * DashboardChat - Chatbot page for AI assistance
 * Simple chat interface with placeholder functionality
 */
const DashboardChat = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm your Jharkhand Darshan assistant. How can I help you explore Jharkhand today?",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString()
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    
    const handleSendMessage = (e) => {
        e.preventDefault()
        if (inputMessage.trim()) {
            // Add user message
            const userMessage = {
                id: messages.length + 1,
                text: inputMessage,
                sender: 'user',
                timestamp: new Date().toLocaleTimeString()
            }
            
            // Add bot response (placeholder)
            const botMessage = {
                id: messages.length + 2,
                text: "Thank you for your message! I'm here to help you discover the beauty of Jharkhand. This is a placeholder response - the actual AI functionality will be implemented later.",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString()
            }
            
            setMessages([...messages, userMessage, botMessage])
            setInputMessage('')
        }
    }
    
    return (
        <div className='max-w-4xl mx-auto'>
            {/* Page Header */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>Chatbot Interface</h1>
                <p className='text-lg text-gray-600'>
                    Ask me anything about Jharkhand - places to visit, culture, history, or travel tips! (Coming Soon)
                </p>
            </div>
            
            {/* Chat Container */}
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 h-[600px] flex flex-col'>
                {/* Chat Header */}
                <div className='p-4 border-b border-gray-200 bg-indigo-50 rounded-t-lg'>
                    <div className='flex items-center'>
                        <div className='text-2xl mr-3'>🤖</div>
                        <div>
                            <h3 className='font-semibold text-gray-900'>Jharkhand Darshan Bot</h3>
                            <p className='text-sm text-gray-600'>Online • Ready to help</p>
                        </div>
                    </div>
                </div>
                
                {/* Messages Area */}
                <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                    message.sender === 'user'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-100 text-gray-900'
                                }`}
                            >
                                <p className='text-sm'>{message.text}</p>
                                <p className={`text-xs mt-1 ${
                                    message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'
                                }`}>
                                    {message.timestamp}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Message Input */}
                <div className='p-4 border-t border-gray-200'>
                    <form onSubmit={handleSendMessage} className='flex gap-2'>
                        <input
                            type='text'
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder='Ask about Jharkhand...'
                            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                        />
                        <button
                            type='submit'
                            className='bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200'
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
            
            {/* Quick Actions */}
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
                <button className='p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 text-left'>
                    <div className='text-2xl mb-2'>🏛️</div>
                    <h3 className='font-semibold text-gray-900'>Historical Places</h3>
                    <p className='text-sm text-gray-600'>Ask about monuments and heritage sites</p>
                </button>
                
                <button className='p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 text-left'>
                    <div className='text-2xl mb-2'>🌿</div>
                    <h3 className='font-semibold text-gray-900'>Natural Attractions</h3>
                    <p className='text-sm text-gray-600'>Learn about parks and waterfalls</p>
                </button>
                
                <button className='p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 text-left'>
                    <div className='text-2xl mb-2'>🎭</div>
                    <h3 className='font-semibold text-gray-900'>Culture & Festivals</h3>
                    <p className='text-sm text-gray-600'>Discover local traditions</p>
                </button>
            </div>
        </div>
    )
}

export default DashboardChat
