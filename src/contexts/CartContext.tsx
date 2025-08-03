"use client"

import { createContext, useContext, useReducer, ReactNode } from 'react'
import { Cart, CartItem, addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } from '@/lib/cart'

interface CartContextType {
  cart: Cart
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction = 
  | { type: 'ADD_ITEM'; payload: { item: Omit<CartItem, 'quantity'>; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItemToCart(state, action.payload.item, action.payload.quantity)
    case 'REMOVE_ITEM':
      return removeItemFromCart(state, action.payload)
    case 'UPDATE_QUANTITY':
      return updateItemQuantity(state, action.payload.itemId, action.payload.quantity)
    case 'CLEAR_CART':
      return clearCart()
    default:
      return state
  }
}

const initialCart: Cart = {
  items: [],
  total: 0,
  itemCount: 0
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { item, quantity } })
  }

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } })
  }

  const clearCartItems = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart: clearCartItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}