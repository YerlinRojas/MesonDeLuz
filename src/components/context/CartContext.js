import React, { useState,  createContext } from 'react'

export const CartContext = createContext({cart: []
});



export const CartProvider = ({children}) => {

  const [cart, setCart]= useState([])

  const addItem = (item,quantity) => {
    if (isInCart(item.id)){
      setCart(cart.map(product =>{
        return product.id === item.id ? {...product, quantity: product.quantity+quantity} : product
      }))
    }
    else {
      setCart([...cart, {...item, quantity}])
    }

}


  const clearCart = ()=> {
  setCart([])
}

  const removeItem = (item)=>{
  const cartUpadate = cart.filter ( prod =>prod.id !== item)  
  setCart(cartUpadate)
}

  const isInCart = (item)=>{
  return cart.some(prod=>prod.id === item)

}

const totalPrice = () => {
  return cart.reduce((prev,act) => prev + act.quantity * act.price,0)
}

const totalProducts = () => {
  return cart.reduce((acc,productAct) => acc+productAct.quantity, 0)
}

  return (
    <CartContext.Provider value={{
      cart,
      
      isInCart,
      removeItem,
      clearCart,
      addItem,
      totalPrice,
      totalProducts
    }}>
      {children}
    </CartContext.Provider>
  )
}


