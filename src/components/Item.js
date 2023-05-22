import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, image, title, description, price, stock}) => {
  
  
    
  
    return (
    <>




<div class="card cardStyle" style= {{width:"18rem"}}>
<Link to={`/item/${id}`}><img src={image} class="card-img-top" alt="imagen"></img></Link> 
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">Precio:$ {price}</p>
  </div>
</div>


    </>
  )
}

export default Item
