export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  slug: string
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0)
}

export const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0)
}

export const addItemToCart = (cart: Cart, newItem: Omit<CartItem, 'quantity'>, quantity: number = 1): Cart => {
  const existingItemIndex = cart.items.findIndex(item => item.id === newItem.id)
  
  let updatedItems: CartItem[]
  
  if (existingItemIndex >= 0) {
    // Item exists, update quantity
    updatedItems = cart.items.map((item, index) => 
      index === existingItemIndex 
        ? { ...item, quantity: item.quantity + quantity }
        : item
    )
  } else {
    // New item, add to cart
    updatedItems = [...cart.items, { ...newItem, quantity }]
  }
  
  return {
    items: updatedItems,
    total: calculateCartTotal(updatedItems),
    itemCount: calculateItemCount(updatedItems)
  }
}

export const removeItemFromCart = (cart: Cart, itemId: string): Cart => {
  const updatedItems = cart.items.filter(item => item.id !== itemId)
  
  return {
    items: updatedItems,
    total: calculateCartTotal(updatedItems),
    itemCount: calculateItemCount(updatedItems)
  }
}

export const updateItemQuantity = (cart: Cart, itemId: string, quantity: number): Cart => {
  if (quantity <= 0) {
    return removeItemFromCart(cart, itemId)
  }
  
  const updatedItems = cart.items.map(item => 
    item.id === itemId ? { ...item, quantity } : item
  )
  
  return {
    items: updatedItems,
    total: calculateCartTotal(updatedItems),
    itemCount: calculateItemCount(updatedItems)
  }
}

export const clearCart = (): Cart => ({
  items: [],
  total: 0,
  itemCount: 0
})