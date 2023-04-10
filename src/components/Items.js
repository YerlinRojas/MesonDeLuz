
import React, { useState } from 'react'
/* intento de extraer info desde API */
/* const urlApi='https://rickandmortyapi.com/api/character' */

/* 
export const getAllCharacter = (data) => 
fetch (`${urlApi}`)
.then ((res)=> res.json())
.then ((data) => console.log(data))

.catch ((error) => console.log(error))  */
/* 
export const getAllCharacter = (data) => {
    fetch ('https://rickandmortyapi.com/api/${dato}')
    .then ((res)=> res.json())
    .then ((data)=> console.log(data))
}  
 */

/* 
const initialCart = [
    {
        id:1,
        title: 'Product1'
        description : 'descrip1'
    }
    {
        id:2,
        title: 'Product2'
        description : 'descrip2'
    }
] */

const Items = () => {

    
    const [quantity, setQuantity] = useState (0)
    
    const handleIncrement = () => {
          setQuantity(quantity + 1)

      }
      const handleDecrement = () => {
        quantity > 1 ? setQuantity ( quantity - 1) : setQuantity (0);
      }


  return (

    <>
    <p>{quantity}</p>
    <button onClick = {handleDecrement} type="button" class="btn btn-warning">-</button>
    <button onClick = {handleIncrement} type="button" class="btn btn-warning">+</button>

    </>
  )
}

export default Items

