import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'



const ItemCart = ({product}) => {

    const {removeItem} = useContext (CartContext)

  return (
    <>
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.image} class="img-fluid rounded-start" alt="imagen producto"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text"><small class="text-body-secondary">Cantidad : {product.quantity}</small></p>
        <p class="card-text"><small class="text-body-secondary">Precio: ${product.price} c/u</small></p>
        <p class="card-text"><small class="text-body-secondary">SubTotal : ${product.quantity*product.price}</small></p>
        <button onClick={()=>removeItem(product.id)} type="button" class="btn btn-warning">Eliminar</button>
        
      </div>
      </div>
  </div>
</div>
    </>
  )
}

export default ItemCart
