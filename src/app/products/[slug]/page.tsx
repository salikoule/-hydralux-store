"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Star, 
  ShoppingCart, 
  Heart,
  Share2,
  Shield,
  Truck,
  RotateCcw,
  CheckCircle,
  Minus,
  Plus,
  Play,
  Award,
  Droplets,
  Timer,
  Users
} from "lucide-react"
import { getProductBySlug, products } from "@/data/products"
import { formatPrice } from "@/lib/utils"

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('description')
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [recentBuyers] = useState([
    { name: "Alex", location: "Berlin", time: "2 minutes ago" },
    { name: "Sarah", location: "Toronto", time: "5 minutes ago" },
    { name: "Mike", location: "Austin", time: "8 minutes ago" }
  ])
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0)

  // Social proof rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBuyerIndex(prev => (prev + 1) % recentBuyers.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [recentBuyers.length])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3)

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' }
  ]

  const faqs = [
    {
      question: "How often do I need to replace the filter?",
      answer: "Filter replacement frequency depends on usage and water quality. Typically every 2-6 months or as indicated by the filter indicator."
    },
    {
      question: "Is installation difficult?",
      answer: "No! All our products are designed for easy, tool-free installation. Most customers complete setup in under 10 minutes."
    },
    {
      question: "What contaminants does this remove?",
      answer: "Our filters remove 99.99% of bacteria, chlorine, heavy metals, and other common contaminants while preserving beneficial minerals."
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes! All products come with a comprehensive warranty and 30-day money-back guarantee."
    }
  ]

  const reviews = [
    {
      name: "Jennifer M.",
      rating: 5,
      date: "2 weeks ago",
      title: "Excellent product!",
      content: "The difference in water taste is incredible. Installation was super easy and the design looks great in my kitchen.",
      verified: true
    },
    {
      name: "David K.",
      rating: 5,
      date: "1 month ago", 
      title: "Highly recommended",
      content: "Been using this for over a month now. Water tastes amazing and the filter indicator is very helpful.",
      verified: true
    },
    {
      name: "Lisa R.",
      rating: 4,
      date: "3 weeks ago",
      title: "Great value for money",
      content: "Good quality product. Noticed improvement in water quality immediately. Would buy again.",
      verified: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Social Proof Notification */}
      <motion.div
        key={currentBuyerIndex}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        className="fixed bottom-6 left-6 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-50 max-w-sm"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              {recentBuyers[currentBuyerIndex].name} from {recentBuyers[currentBuyerIndex].location}
            </p>
            <p className="text-xs text-gray-600">
              just bought this • {recentBuyers[currentBuyerIndex].time}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
              <Droplets className="w-32 h-32 text-blue-500" />
              <button className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center ${
                    selectedImage === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <Droplets className="w-8 h-8 text-blue-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                  {product.category}
                </span>
                {product.inStock && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    In Stock
                  </span>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-600">({product.reviewCount} reviews)</span>
              <button className="text-blue-600 hover:underline">Read reviews</button>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-4xl font-bold text-blue-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded font-bold text-sm">
                      25% OFF
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Timer className="w-4 h-4 mr-1" />
                  <span>Limited time offer</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span>{product.stockCount} left in stock</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Section */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Total: {formatPrice(product.price * quantity)}
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 border border-gray-300 rounded-lg transition-colors ${
                    isWishlisted ? 'bg-red-50 border-red-300 text-red-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <button className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
                Buy Now - Express Checkout
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-green-500 mb-2" />
                <span className="text-sm font-medium text-gray-900">Money Back</span>
                <span className="text-xs text-gray-600">30-day guarantee</span>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-sm font-medium text-gray-900">Free Shipping</span>
                <span className="text-xs text-gray-600">Orders over $75</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-purple-500 mb-2" />
                <span className="text-sm font-medium text-gray-900">Certified</span>
                <span className="text-xs text-gray-600">NSF & EPA approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t">
        <div className="flex border-b mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {product.fullDescription}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Features:</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 1x {product.name}</li>
                    <li>• Installation hardware</li>
                    <li>• User manual & quick start guide</li>
                    <li>• Warranty card</li>
                    <li>• Premium packaging</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">Customer Reviews</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Write a Review
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                    <p className="text-gray-700 mb-3">{review.content}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{review.name}</span>
                      <span className="mx-2">•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <Droplets className="w-16 h-16 text-blue-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedProduct.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {formatPrice(relatedProduct.price)}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}