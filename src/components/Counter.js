import React from 'react'
import useCounter from './useCounter'



const Counter = ({stock}) => {


    const resultado = useCounter ()
    
    return (
    <>
     
    <p>{resultado.quantity}</p>
    <button  onClick = {resultado.handleDecrement} type="button" class="btn btn-warning">-</button>
    <button disabled={resultado.quantity === stock} onClick = {resultado.handleIncrement} type="button" class="btn btn-warning">+</button>
    
    </>
  )
}

export default Counter
