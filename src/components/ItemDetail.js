import React from 'react'
import Counter from './Counter';


const ItemDetail = ({image, title, description,price, stock,id}) => {


    return (
        <>
          <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <p class="card-text"><small class="text-body-secondary">{price}</small></p>
        <p>Stock:{stock}</p>
      </div>
      <Counter stock= {stock}/> 
    <button type="button" class="btn btn-warning">Agregar</button>
    </div>
  </div>
</div>
        </>
    );
};

export default ItemDetail
