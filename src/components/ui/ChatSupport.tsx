"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hi! I'm here to help you with any questions about HydraLux products. How can I assist you today?",
      timestamp: new Date()
    }
  ])

  const quickReplies = [
    "What filters do you recommend?",
    "How do I install my filter?",
    "When should I replace my filter?",
    "What's your return policy?"
  ]

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        content: getBotResponse(content),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes("filter") && msg.includes("recommend")) {
      return "Great question! Our most popular filters are:\n\n• Faucet Filter - Perfect for kitchen use\n• Adventure Bottle - Great for outdoor activities\n• Shower Filter - Improves skin and hair health\n\nWhat type of water filtration are you looking for?"
    }
    
    if (msg.includes("install")) {
      return "Installation is super easy! All our products come with step-by-step instructions and require no tools. Most customers complete installation in under 10 minutes. Would you like me to send you a specific installation guide?"
    }
    
    if (msg.includes("replace")) {
      return "Filter replacement depends on usage and water quality:\n\n• Faucet filters: Every 2-3 months\n• Portable filters: Every 6 months\n• Shower filters: Every 6-8 months\n\nOur products have built-in indicators to let you know when it's time to replace!"
    }
    
    if (msg.includes("return")) {
      return "We offer a 30-day money-back guarantee on all products! If you're not completely satisfied, you can return your purchase for a full refund. Would you like me to help you start a return?"
    }
    
    return "Thanks for your question! I'd be happy to help you with that. For detailed assistance, you can also call our support team at 1-800-HYDRALUX or email support@hydralux.com. Is there anything specific about our products I can help clarify?"
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">HydraLux Support</h3>
                  <p className="text-xs text-blue-100">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(reply)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage(message)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  onClick={() => handleSendMessage(message)}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}