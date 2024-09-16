// import { LineItem } from "@medusajs/medusa"

// import { enrichLineItems, retrieveCart } from "@modules/cart/actions"

// import CartDropdown from "../cart-dropdown"

// const fetchCart = async () => {
//   const cart = await retrieveCart()

//   if (cart?.items.length) {
//     const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
//     cart.items = enrichedItems as LineItem[]
//   }

//   return cart
// }

// export default async function CartButton() {
//   const cart = await fetchCart()

//   return <CartDropdown cart={cart} />
// }
"use client"

import React, { useState, useEffect } from 'react'
import { Cart, LineItem } from "@medusajs/medusa"
import CartDropdown from "../cart-dropdown"
import { enrichLineItems, retrieveCart } from "@modules/cart/actions"


// Move this function inside the component to avoid "use server" directive in client component file
async function fetchCartData(): Promise<Omit<Cart, "beforeInsert" | "afterLoad"> | null> {
  const cart = await retrieveCart()
  if (cart?.items?.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
    cart.items = enrichedItems as LineItem[]
  }

  return cart
}
const CartButton: React.FC = () => {
  const [cart, setCart] = useState<Omit<Cart, "beforeInsert" | "afterLoad"> | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCart = async () => {
      setIsLoading(true)
      try {
        const cartData = await fetchCartData()
        setCart(cartData)
      } catch (error) {
        console.error("Error fetching cart:", error)
      } finally {
        setIsLoading(false)
      }
    }

    getCart()
  }, [])

  if (isLoading) {
    return (
      <span className="hover:text-ui-fg-base flex gap-2">
        {/* Cart (0) */}
      </span>
    )
  }

  return <CartDropdown cart={cart} />
}

export default CartButton