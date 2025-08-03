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
  Users,
  Zap,
  Target,
  TrendingUp,
  Clock,
  Gift,
  Package,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Badge,
  Sparkles,
  Heart as HeartIcon,
  Brain,
  Activity,
  Waves
} from "lucide-react"
import { getProductBySlug, products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import AddToCartButton from "@/components/ui/AddToCartButton"

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('description')
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isSubscription, setIsSubscription] = useState(true)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [recentBuyers] = useState([
    { name: "Alex", location: "Berlin", time: "2 minutes ago" },
    { name: "Sarah", location: "Toronto", time: "5 minutes ago" },
    { name: "Mike", location: "Austin", time: "8 minutes ago" }
  ])
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0)

  // Social proof rotation and testimonial rotation
  useEffect(() => {
    const buyerInterval = setInterval(() => {
      setCurrentBuyerIndex(prev => (prev + 1) % recentBuyers.length)
    }, 4000)
    
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % customerTestimonials.length)
    }, 8000)
    
    return () => {
      clearInterval(buyerInterval)
      clearInterval(testimonialInterval)
    }
  }, [recentBuyers.length, customerTestimonials.length])

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

  // Product-specific data
  const getProductSpecificData = () => {
    switch (product.id) {
      case 'faucet-filter':
        return {
          howItWorks: [
            { icon: Droplets, title: "Multi-Stage Filtration", description: "Advanced carbon and membrane technology removes 99.9% of contaminants while preserving beneficial minerals." },
            { icon: Zap, title: "Instant Purification", description: "Clean water flows immediately without waiting, pressure reduction, or electricity requirements." },
            { icon: Shield, title: "Health Protection", description: "Eliminates chlorine, heavy metals, and toxins that cause skin irritation and long-term health issues." }
          ],
          targetAreas: [
            { area: "Kitchen Sink", benefit: "Transform cooking and drinking water", icon: "🏠" },
            { area: "Family Health", benefit: "Protect everyone from harmful contaminants", icon: "👨‍👩‍👧‍👦" },
            { area: "Skin & Hair", benefit: "Reduce dryness and chemical irritation", icon: "✨" },
            { area: "Energy Levels", benefit: "Improve hydration and cellular function", icon: "⚡" }
          ]
        }
      case 'adventure-bottle':
        return {
          howItWorks: [
            { icon: Target, title: "Hollow Fiber Technology", description: "Medical-grade membrane filters bacteria, parasites, and microplastics down to 0.1 microns." },
            { icon: Activity, title: "Activated Carbon Core", description: "Removes chemicals, heavy metals, and improves taste from any freshwater source." },
            { icon: Heart, title: "Health Optimization", description: "Provides pure hydration that enhances athletic performance and cognitive function." }
          ],
          targetAreas: [
            { area: "Hiking & Camping", benefit: "Safe water from any natural source", icon: "🏔️" },
            { area: "International Travel", benefit: "Protection from foreign water contaminants", icon: "✈️" },
            { area: "Emergency Preparedness", benefit: "Reliable clean water during disasters", icon: "🚨" },
            { area: "Athletic Performance", benefit: "Optimal hydration for peak results", icon: "🏃‍♂️" }
          ]
        }
      case 'shower-head':
        return {
          howItWorks: [
            { icon: Waves, title: "Pressure Boost Technology", description: "Increases water pressure up to 200% while filtering harmful chemicals and chlorine." },
            { icon: Sparkles, title: "Negative Ion Generation", description: "Creates spa-like atmosphere while improving air quality and promoting relaxation." },
            { icon: HeartIcon, title: "Skin & Hair Restoration", description: "Preserves natural oils and pH balance for healthier, more radiant appearance." }
          ],
          targetAreas: [
            { area: "Hair Health", benefit: "40% shinier, stronger hair", icon: "💇‍♀️" },
            { area: "Skin Restoration", benefit: "Reduced dryness and irritation", icon: "✨" },
            { area: "Respiratory Health", benefit: "Cleaner air, reduced asthma triggers", icon: "🫁" },
            { area: "Daily Relaxation", benefit: "Spa-like wellness experience", icon: "🧘‍♀️" }
          ]
        }
      case 'bidet-sprayer':
        return {
          howItWorks: [
            { icon: Droplets, title: "Dual-Nozzle Precision", description: "Separate feminine and posterior nozzles with adjustable pressure for optimal hygiene." },
            { icon: Shield, title: "Antimicrobial Protection", description: "Self-cleaning nozzles with antimicrobial coating prevent bacterial growth." },
            { icon: Waves, title: "Therapeutic Benefits", description: "Gentle water pressure improves circulation and reduces inflammation." }
          ],
          targetAreas: [
            { area: "Personal Hygiene", benefit: "Superior cleansing and comfort", icon: "🛁" },
            { area: "Health Protection", benefit: "60% reduction in UTI risk", icon: "⚕️" },
            { area: "Environmental Impact", benefit: "80% less toilet paper usage", icon: "🌱" },
            { area: "Medical Recovery", benefit: "Gentle care for sensitive conditions", icon: "💊" }
          ]
        }
      default:
        return {
          howItWorks: [],
          targetAreas: []
        }
    }
  }

  const productData = getProductSpecificData()

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' }
  ]

  // Enhanced customer testimonials with before/after
  const customerTestimonials = [
    {
      name: "Amanda R.",
      age: 34,
      location: "Seattle, WA",
      timeUsed: "2 months",
      beforeImage: "/images/testimonials/before-1.jpg",
      afterImage: "/images/testimonials/after-1.jpg",
      rating: 5,
      title: "Life-Changing Water Quality",
      testimonial: "After 2 months of using the HydraLux filter daily, my skin is the best it's been in years. The difference in water taste was immediate, but the skin benefits took a few weeks to show. My family's health has improved dramatically - we're all drinking more water now!",
      benefits: ["Clearer skin", "Better hydration", "Improved taste", "Family health boost"]
    },
    {
      name: "Marcus K.",
      age: 42,
      location: "Austin, TX",
      timeUsed: "4 months",
      beforeImage: "/images/testimonials/before-2.jpg",
      afterImage: "/images/testimonials/after-2.jpg",
      rating: 5,
      title: "Amazing Results for My Family",
      testimonial: "We've been using HydraLux for four months now and I've noticed improvements with each week! My wife was skeptical at first, but now she's the biggest advocate. Our kids are drinking more water, our coffee tastes incredible, and our skin feels so much softer.",
      benefits: ["Family-wide health improvement", "Better coffee taste", "Softer skin", "Increased water consumption"]
    },
    {
      name: "Dr. Lisa Chen",
      age: 38,
      location: "San Francisco, CA",
      timeUsed: "6 months",
      beforeImage: "/images/testimonials/before-3.jpg",
      afterImage: "/images/testimonials/after-3.jpg",
      rating: 5,
      title: "Recommended by Professionals",
      testimonial: "As a physician, I'm very particular about what I recommend to patients. HydraLux exceeded my expectations. The scientific backing is solid, and the results speak for themselves. My patients who've switched report better hydration, improved skin, and increased energy levels.",
      benefits: ["Professional-grade quality", "Scientific backing", "Patient-approved", "Medical endorsement"]
    }
  ]

  // Enhanced FAQs with more comprehensive answers
  const faqs = [
    {
      question: "How long does it take to see health benefits?",
      answer: "Most customers notice improved taste immediately, with skin and hair benefits becoming visible within 2-4 weeks of consistent use. Full health optimization typically occurs within 6-8 weeks as your body adapts to cleaner water and reduced chemical exposure."
    },
    {
      question: "What specific contaminants does this remove?",
      answer: "Our advanced filtration removes 99.9% of chlorine, 99.99% of bacteria and parasites, heavy metals (lead, mercury, copper), pesticides, herbicides, pharmaceutical residues, microplastics, and over 70 other contaminants while preserving beneficial minerals like calcium and magnesium."
    },
    {
      question: "Is installation really tool-free?",
      answer: "Absolutely! Our patented quick-connect system allows installation in under 3 minutes without any tools. The package includes everything needed, and our video guide makes it foolproof. If you have any issues, our support team provides free installation assistance."
    },
    {
      question: "How often do I need to replace the filter?",
      answer: "Filter replacement varies by usage and water quality. Our intelligent indicator system alerts you when replacement is needed - typically every 2-6 months for average households. Replacement filters are available through our convenient subscription service with automatic delivery."
    },
    {
      question: "What's your money-back guarantee?",
      answer: "We offer a comprehensive 90-day money-back guarantee. If you're not completely satisfied with your health improvements and water quality, return the product for a full refund. We're confident you'll experience transformative results, but we remove all risk from your purchase."
    },
    {
      question: "Do you offer subscription savings?",
      answer: "Yes! Our Subscribe & Save program offers 30% off your initial purchase and 25% off all replacement filters with free shipping. You can modify, pause, or cancel anytime. Most customers save $200+ annually while ensuring they never run out of clean water."
    },
    {
      question: "How does this compare to other brands?",
      answer: "HydraLux combines superior filtration technology with health-focused design. Unlike basic carbon filters, our multi-stage system addresses the full spectrum of contaminants. We're the only brand that preserves beneficial minerals while removing harmful chemicals - delivering both purity and wellness."
    },
    {
      question: "Is this suitable for well water?",
      answer: "Our systems work excellently with well water and municipal water. For well water, we recommend our pre-filtration options to handle sediment and extend filter life. Our customer service team can recommend the perfect configuration based on your specific water conditions."
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

      {/* Hero Section with Guarantee */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold">RISK FREE: 90-Day Money-Back Guarantee</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Effortless Water Purification is Here</h1>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span>Free Returns</span>
              </div>
              <div className="flex items-center">
                <Truck className="w-4 h-4 mr-1" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                <span>NSF Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4 overflow-hidden relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </button>
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  LIMITED TIME: 30% OFF
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
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

            {/* Subscribe & Save Section */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Subscribe & Save</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsSubscription(false)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      !isSubscription ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setIsSubscription(true)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      isSubscription ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              {isSubscription && (
                <div className="mb-4 p-4 bg-white rounded-lg border">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex items-center">
                      <Gift className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">30% OFF first order</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">Free shipping always</span>
                    </div>
                    <div className="flex items-center">
                      <Timer className="w-4 h-4 text-purple-500 mr-2" />
                      <span className="text-sm">Cancel anytime</span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm">VIP benefits</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Automatic filter replacements delivered when you need them. Modify or cancel anytime.
                  </p>
                </div>
              )}

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg bg-white">
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
                  {isSubscription ? (
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        {formatPrice(product.price * 0.7 * quantity)}
                      </span>
                      <span className="text-sm text-gray-500 ml-2 line-through">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>
                  ) : (
                    <span>Total: {formatPrice(product.price * quantity)}</span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <AddToCartButton 
                  product={product}
                  quantity={quantity}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                />
                
                <button className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Buy Now - Express Checkout
                </button>
              </div>

              <div className="flex items-center justify-center space-x-4 mt-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex items-center space-x-2 text-sm ${
                    isWishlisted ? 'text-red-600' : 'text-gray-600'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  <span>Save for later</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-600">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
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

      {/* Customer Testimonials - The HydraLux Effect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The HydraLux <span className="text-blue-600">Effect</span>
            </h2>
            <p className="text-xl text-gray-600">Real customers, real results, real health transformations</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Before/After Images */}
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square bg-gray-100">
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Before
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Before Image</span>
                    </div>
                  </div>
                  <div className="relative aspect-square bg-gray-100">
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      After
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">After Image</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <h3 className="font-bold text-gray-900 mb-2">{testimonial.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {testimonial.testimonial}
                  </p>

                  {/* Benefits Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonial.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Customer Info */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-xs text-gray-600">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-blue-600">{testimonial.timeUsed}</p>
                        <p className="text-xs text-gray-600">using HydraLux</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">96% of customers would recommend HydraLux</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Proven Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              3 Proven Technologies, 1 Powerful Solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {productData.howItWorks.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Scientific Backing */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Backed by <span className="text-blue-600">HydraLux Technology</span>
              </h3>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Leading the future of water purification, our medical-grade technology not only combines safety and innovation but has also shown its effectiveness in clinical studies and real-world applications.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex flex-col items-center">
                  <Droplets className="w-8 h-8 text-blue-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Purifies Water</span>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Boosts Energy</span>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="w-8 h-8 text-red-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Improves Health</span>
                </div>
                <div className="flex flex-col items-center">
                  <Sparkles className="w-8 h-8 text-purple-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Enhances Skin</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-8 h-8 text-green-500 mb-2" />
                  <span className="text-sm font-medium text-gray-900">Protects Family</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Every Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Target Every <span className="text-blue-600">Need</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive wellness solutions for your entire lifestyle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.targetAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{area.area}</h3>
                <p className="text-gray-600 text-sm">{area.benefit}</p>
              </motion.div>
            ))}
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
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-semibold text-gray-900 pr-4">{faq.question}</h4>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2">Still have questions?</h4>
                  <p className="text-gray-700 mb-4">Our water quality experts are here to help!</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Money-Back Guarantee Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">90-Day Money Back Guarantee</h2>
          <p className="text-xl text-green-100 mb-8">
            We're confident in our products. Don't love it? Send it back, and we'll refund your purchase.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-green-100">Simple return process with free shipping</p>
            </div>
            <div>
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Badge className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-green-100">Premium materials and construction</p>
            </div>
            <div>
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Customer First</h3>
              <p className="text-sm text-green-100">Your satisfaction is our priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HydraLux Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why we're the right choice
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">Backed by thousands of satisfied customers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">NSF Certified</h3>
              <p className="text-gray-600 text-sm">Independently tested and certified</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">90-Day Guarantee</h3>
              <p className="text-gray-600 text-sm">Risk-free trial with full refund</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Subscribe & Save</h3>
              <p className="text-gray-600 text-sm">30% off with convenient auto-delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Complete Your Water Wellness Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden relative">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        30% OFF
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-blue-600">
                          {formatPrice(relatedProduct.price)}
                        </span>
                        {relatedProduct.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">
                            {formatPrice(relatedProduct.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{relatedProduct.rating}</span>
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