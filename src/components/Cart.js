import React, { useContext, useRef,useState } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import { addDoc, collection } from 'firebase/firestore'
import { db } from './firebase/setting'


const Cart = () => {
    
const nameRef = useRef ()
const lastNameRef = useRef()
const emailRef = useRef()
const teleRef = useRef ()
const direcRef = useRef ()

const [usuario, setUsuario]=useState ()


const handleClick = () => {

    const nameRef = nameRef.currrent.value
    const lastNameRef = lastNameRef.currrent.value
    const emailRef = emailRef.currrent.value
    const teleRef = teleRef.currrent.value
    const direcRef = direcRef.currrent.value

    const usuarioLoged = {nameRef, lastNameRef, emailRef, teleRef, direcRef}

    setUsuario(usuarioLoged)
    console.log(usuario)
}


const {cart, totalPrice} = useContext (CartContext)


const order = {
  usuario : usuario,
  item : cart.map (product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
  total: totalPrice()
}

const handleOrder = () => {
  const orderCollection = collection(db, "orders")
  addDoc(orderCollection, order)
  .then (({ id }) => console.log(id))

}




if (cart.length === 0){
  return (
    <div class= "avisoCart">
      <h2>Aun no has elegido nada para comprar</h2>
    <Link to= "/" ><button type="button" class="btn btn-warning">Seguir Comprando</button></Link>
    </div>
  )

}


return (
    <>
    <p>Completa tus datos</p>
    <input ref= {nameRef} type="text" placeholder='Nombre'></input>
    <input ref= {lastNameRef} type="text" placeholder='Apellido'></input>
    <input ref= {emailRef} type="email" placeholder='email'></input>  
    <input ref= {teleRef} type="text" placeholder='Telefono'></input>
    <input ref= {direcRef} type="text" placeholder='Direccion'></input>
    <button onClick={handleClick} type="button" class="btn btn-warning">aceptar</button>

     {
        cart.map(product => <ItemCart key={product.id} product={product}/>)   
     } 
     <div>
     <di>
      <p>Total : $ {totalPrice()}</p>
     <button onClick={handleOrder} type="button" class="btn btn-warning"> Ir a Pagar</button>
     </di>
    <div>
     <Link to= "/"> <button  type="button" class="btn btn-warning"> Seguir Comprando</button></Link>
     </div>
     </div>
    </>
  )


}



export default Cart
