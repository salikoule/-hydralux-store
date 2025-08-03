"use client"

import { useState } from "react"
import { ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { Product } from "@/data/products"

interface AddToCartButtonProps {
  product: Product
  quantity?: number
  className?: string
}

export default function AddToCartButton({ 
  product, 
  quantity = 1, 
  className = "bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300" 
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      slug: product.slug
    }, quantity)

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`${className} flex items-center justify-center transition-all duration-300 ${
        isAdded ? 'bg-green-600 hover:bg-green-700' : ''
      }`}
    >
      {isAdded ? (
        <>
          <Check className="w-5 h-5 mr-2" />
          Added to Cart!
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </>
      )}
    </button>
  )
}