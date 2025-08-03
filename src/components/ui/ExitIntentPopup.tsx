"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Gift, Timer } from "lucide-react"

interface ExitIntentPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ExitIntentPopup({ isOpen, onClose }: ExitIntentPopupProps) {
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (!isOpen) return

    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0)
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <Gift className="w-12 h-12 mx-auto mb-3" />
                <h2 className="text-2xl font-bold mb-2">Wait! Don't Leave Yet!</h2>
                <p className="text-blue-100">
                  Get 15% off your first order + free shipping
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center space-x-2 text-red-600">
                    <Timer className="w-5 h-5" />
                    <span className="font-semibold">This offer expires in:</span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Join over 50,000 customers who trust HydraLux for clean, pure water.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What you'll get:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ 15% off your first order</li>
                    <li>✓ Free shipping on orders over $75</li>
                    <li>✓ Exclusive access to new products</li>
                    <li>✓ Filter replacement reminders</li>
                  </ul>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Claim My 15% Discount
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  No spam, unsubscribe at any time. By signing up, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}