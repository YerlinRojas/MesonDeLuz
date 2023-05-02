
import  { useState } from 'react'


const useCounter = () => {
  const [quantity, setQuantity] = useState (0)
    
    const handleIncrement = () => {
          setQuantity(quantity + 1)
      }
    const handleDecrement = () => {
        quantity > 1 ? setQuantity ( quantity - 1) : setQuantity (0);
      }

  return {
    quantity : quantity,
    handleIncrement : handleIncrement,
    handleDecrement : handleDecrement
}

}

export default useCounter

