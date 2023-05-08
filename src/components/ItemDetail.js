import React, { useContext, useState } from 'react'
import Counter from './Counter';
import { Link } from 'react-router-dom' 
import { CartContext } from './context/CartContext';




const ItemDetail = ({...product}) => {


const [addQuantity, setAddQuantity] = useState(0)

const { addItem } = useContext (CartContext)


  const onAdd = (quantity) => {
    setAddQuantity(quantity)
    addItem(product,quantity)
  }




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
        <p class="card-text">{product.description}</p>
        <p class="card-text"><small class="text-body-secondary">{product.price}</small></p>
        <p>Stock:{product.stock}</p>
      </div>
      <di>
      {
        addQuantity > 0 ?
        ((<Link to= "/cart" ><button type="button" class="btn btn-warning">Terminar compra</button></Link>)
         )
        :
        (<Counter onAdd={onAdd} stock= {product.stock}/>)
      }
  

      </di>
      </div>
  </div>
</div>
        </>
    );
};

export default ItemDetail
