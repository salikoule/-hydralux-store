"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Star, 
  ShoppingCart, 
  CheckCircle, 
  Droplets, 
  Shield, 
  Award,
  TrendingUp,
  Users,
  ArrowRight,
  Timer,
  Truck,
  RotateCcw
} from "lucide-react"
import { products, getFeaturedProducts } from "@/data/products"
import { formatPrice } from "@/lib/utils"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [urgencyTimer, setUrgencyTimer] = useState(86400) // 24 hours in seconds
  const featuredProducts = getFeaturedProducts()

  // Timer countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setUrgencyTimer(prev => prev > 0 ? prev - 1 : 86400)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const testimonials = [
    {
      name: "Sarah M.",
      location: "California",
      text: "The faucet filter transformed our tap water instantly. My family loves the taste!",
      rating: 5,
      product: "Faucet Filter"
    },
    {
      name: "Mike R.",
      location: "Colorado",
      text: "Took the adventure bottle on a 3-day hiking trip. Clean water from any stream!",
      rating: 5,
      product: "Adventure Bottle"
    },
    {
      name: "Emma L.",
      location: "Texas",
      text: "The shower head filter made such a difference. My skin feels amazing!",
      rating: 5,
      product: "Shower Head"
    }
  ]

  const trustBadges = [
    { icon: Shield, text: "NSF Certified", subtext: "Independently tested" },
    { icon: Award, text: "EPA Approved", subtext: "Environmental safety" },
    { icon: CheckCircle, text: "30-Day Guarantee", subtext: "Risk-free trial" },
    { icon: Truck, text: "Free Shipping", subtext: "Orders over $75" }
  ]

  return (
    <div className="min-h-screen">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 text-center">
        <div className="flex items-center justify-center space-x-2 text-sm font-medium">
          <Timer className="w-4 h-4" />
          <span>Flash Sale Ends In: {formatTime(urgencyTimer)}</span>
          <span className="bg-white text-red-500 px-2 py-1 rounded text-xs font-bold">25% OFF</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e0f2fe" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                #1 Rated Water Filtration Brand
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Clean Living,
                </span>
                <br />
                <span className="text-gray-900">Elevated.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience premium water filtration with HydraLux. From kitchen to outdoor adventures, 
                our sophisticated solutions deliver pure, clean water wherever life takes you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop Now - 25% Off
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <span>50,000+ Happy Customers</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-1 text-yellow-400 fill-current" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <Droplets className="w-24 h-24 text-blue-500" />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Filtration</h3>
                    <p className="text-gray-600">Removes 99.99% of contaminants</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <badge.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <h4 className="font-semibold text-gray-900 mb-1">{badge.text}</h4>
                <p className="text-sm text-gray-600">{badge.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Water Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our collection of sophisticated water filtration products designed 
              for the modern lifestyle. Each product combines cutting-edge technology with elegant design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <Droplets className="w-16 h-16 text-blue-500" />
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      25% OFF
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-gray-600 ml-1">({product.reviewCount})</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      {product.stockCount} left
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      Add to Cart
                    </button>
                    <Link 
                      href={`/products/${product.slug}`}
                      className="px-4 py-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-flex items-center bg-white text-blue-600 border border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              Join our community of satisfied customers who chose HydraLux for clean, pure water
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-900 mb-4">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <cite className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </cite>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonials[currentTestimonial].product}
                  </div>
                </div>
              </motion.div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">4.8/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">99.99%</div>
                <div className="text-gray-600">Contaminant Removal</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">2M+</div>
                <div className="text-gray-600">Gallons Filtered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Clean Living, Elevated?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers and start your journey to pure, clean water today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shop Now - Free Shipping
            </button>
            <div className="flex items-center text-blue-100 text-sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              30-day money-back guarantee
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}