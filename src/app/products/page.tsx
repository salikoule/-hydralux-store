"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Star, 
  ShoppingCart, 
  Filter,
  Grid,
  List,
  ArrowRight,
  Droplets
} from "lucide-react"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import AddToCartButton from "@/components/ui/AddToCartButton"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('featured')

  const categories = ['all', ...new Set(products.map(p => p.category))]

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Premium Water Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our complete collection of sophisticated water filtration products 
            designed for the modern lifestyle
          </p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">
                {sortedProducts.length} products
              </span>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
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
                  </Link>
                  
                  <div className="p-6">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {product.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-blue-600">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        {product.stockCount} left
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <AddToCartButton 
                        product={product}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                      />
                      <Link 
                        href={`/products/${product.slug}`}
                        className="px-3 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    <Link href={`/products/${product.slug}`} className="lg:w-1/3">
                      <div className="relative aspect-square lg:aspect-auto lg:h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        {product.originalPrice && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                            25% OFF
                          </div>
                        )}
                      </div>
                    </Link>
                    
                    <div className="flex-1 p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <Link href={`/products/${product.slug}`}>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-gray-600 mb-4">
                            {product.shortDescription}
                          </p>
                          
                          <div className="flex items-center mb-4">
                            <div className="flex items-center mr-4">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="text-sm font-medium">{product.rating}</span>
                              <span className="text-xs text-gray-600 ml-1">({product.reviewCount} reviews)</span>
                            </div>
                            <span className="text-sm text-green-600 font-medium">
                              {product.stockCount} in stock
                            </span>
                          </div>
                        </div>
                        
                        <div className="lg:text-right">
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold text-blue-600">
                              {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-lg text-gray-400 line-through">
                                {formatPrice(product.originalPrice)}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex gap-3">
                            <AddToCartButton 
                              product={product}
                              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                            />
                            <Link 
                              href={`/products/${product.slug}`}
                              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}