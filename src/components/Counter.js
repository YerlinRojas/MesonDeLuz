import React from 'react'
import { useState } from 'react'



const Counter = ({stock, onAdd}) => {

  const [quantity, setQuantity] = useState (1)

      const handleDecrement = () =>{
        if (quantity > 1)
      setQuantity(quantity - 1)
  } 

    const handleIncrement = () => {
      if (quantity < stock)
          setQuantity(quantity + 1)
      }
  
    
    return (
    <>
     
    
    <button  onClick = {handleDecrement} type="button" class="btn btn-warning">-</button>
    <p>{quantity}</p>
    <button  onClick = {handleIncrement} type="button" class="btn btn-warning">+</button>
    <button onClick={()=> onAdd(quantity)}  type="button" class="btn btn-warning">Add</button>

    </>
  )
}

export default Counter
