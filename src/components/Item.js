import React from 'react'
import Counter from './Counter'
import { Link } from 'react-router-dom'

const Item = ({id, image, title, description, price, stock}) => {
  
  
    const onAdd = (quantity) => {
        console.log(quantity)
      }
    
  
    return (
    <>
     <div   id={id}
                        class="card mb-3"
                        width= "540px" 
                    >
                        <div class="row g-0">
                            <div class="col-md-4">
                           <Link to={`/item/${id}`}><img   src={image}
                                    class="img-fluid rounded-start"
                                    alt="..."
                                ></img></Link> 
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{title}</h5>
                                    <p class="card-text">{description}</p>
                                    <p class="card-text">
                                        <small class="text-body-secondary">
                                            {price}
                                        </small>
                                    </p>
                                    <p>Stock:{stock}</p>
                                </div>
                                <Counter onAdd={onAdd} stock= {stock}/> 
                                
                            </div>
                        </div>
                    </div> 
    </>
  )
}

export default Item
