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
    
      <div className='containerDetail'>

      <div className='containerProduct'>
        <div>
        <img src={product.image} class="img-fluid imagenDetail" alt="imagen producto"/>
        </div>
        <div className='containerInfo'>
        <h3 class="card-title">{product.title}</h3>
        <p class="card-text">{product.description}</p>
        <p class="card-text"><medium class="">Precio: $ {product.price}</medium></p>
        <p class="card-text"><medium class="">Stock: $ {product.stock}</medium></p>
        {
        addQuantity > 0 ?
        ((<Link to= "/cart" ><button type="button" class="btn btn-warning">Terminar compra</button></Link>)
         )
        :
        (<Counter onAdd={onAdd} stock= {product.stock}/>)
      } 
        </div>
      </div>

      <div className='containerDescription'>
      <h2>Descripción :</h2> 
      <p>{product.description2} </p>
      </div>
      
      </div>
      




        </>
    );
};

export default ItemDetail

/*           <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.image} class="img-fluid rounded-start" alt="imagen producto"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.description}</p>
        <p class="card-text"><small class="text-body-secondary">Precio: $ {product.price}</small></p>
        <p class="card-text"><small class="text-body-secondary">Stock: $ {product.stock}</small></p>
      </div>
      <div>
      {
        addQuantity > 0 ?
        ((<Link to= "/cart" ><button type="button" class="btn btn-warning">Terminar compra</button></Link>)
         )
        :
        (<Counter onAdd={onAdd} stock= {product.stock}/>)
      } 
      </div>
      </div>
  </div>
</div>
<div>
Descripción : {product.description2}
</div>
 */