import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'



const Cart = ({product}) => {
const {cart, totalPrice} = useContext (CartContext)

if (cart.length === 0){
  return (
    <div class= "avisoCart">
      <h2>Aun no has elegido nada para comprar</h2>
    <Link to= "./" ><button type="button" class="btn btn-warning">Seguir Comprando</button></Link>
    </div>
  )

}


return (
    <>
     {
        cart.map(product => <ItemCart key={product.id} product={product}/>)   
     } 
     <p>Total : ${totalPrice}</p>
    </>
  )


}



export default Cart
