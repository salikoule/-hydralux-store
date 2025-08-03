import Image from "next/image"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Droplets,
  Leaf,
  Heart,
  Shield
} from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Home Water Filtration: Everything You Need to Know",
    excerpt: "Discover the complete guide to choosing the right water filtration system for your home. From understanding different filter types to maintenance tips, we cover everything you need to ensure clean, safe water for your family.",
    image: "/images/products/faucet-filter-main.svg",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Education",
    featured: true
  }

  const blogPosts = [
    {
      id: 2,
      title: "5 Signs Your Home Water Filter Needs Replacement",
      excerpt: "Learn to recognize the warning signs that indicate it's time to replace your water filter cartridge.",
      image: "/images/products/shower-head-main.svg",
      author: "Marcus Rodriguez",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Maintenance"
    },
    {
      id: 3,
      title: "Adventure Ready: Choosing the Perfect Portable Water Filter",
      excerpt: "Essential guide for outdoor enthusiasts on selecting the right portable water filtration system.",
      image: "/images/products/adventure-bottle-main.svg",
      author: "Dr. Emily Watson",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Outdoor"
    },
    {
      id: 4,
      title: "The Health Benefits of Filtered Shower Water",
      excerpt: "Explore how shower water filtration can improve your skin, hair, and overall wellness.",
      image: "/images/products/shower-head-main.svg",
      author: "Dr. Sarah Chen",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Health"
    },
    {
      id: 5,
      title: "Why Every Home Should Consider a Bidet: Environmental and Health Benefits",
      excerpt: "Discover the surprising benefits of bidets for personal hygiene and environmental sustainability.",
      image: "/images/products/bidet-sprayer-main.svg",
      author: "Marcus Rodriguez",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Lifestyle"
    },
    {
      id: 6,
      title: "Water Quality Testing: How to Know What's in Your Water",
      excerpt: "Simple methods to test your home water quality and understand what contaminants might be present.",
      image: "/images/products/faucet-filter-main.svg",
      author: "Dr. Emily Watson",
      date: "2023-12-15",
      readTime: "5 min read",
      category: "Education"
    }
  ]

  const categories = ["All", "Education", "Health", "Maintenance", "Outdoor", "Lifestyle"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            HydraLux Blog
          </h1>
          <p className="text-xl text-blue-100">
            Expert insights, tips, and guides for clean living and water filtration
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Featured Article
            </span>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-blue-100 to-cyan-100">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Jan 15, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                      <p className="text-sm text-gray-600">Co-Founder & CEO</p>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-2">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{post.author}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with HydraLux
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles, tips, and exclusive offers delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-blue-200 mt-3">
            Join 10,000+ subscribers. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  )
}