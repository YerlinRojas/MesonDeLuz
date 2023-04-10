import React, { useEffect, useState } from 'react'
import Items from './Items'


function ItemListContainer (props) {

  return (
    <>
    
    <div id="Product1" class="card mb-3" style={{'max-width': '540px;'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.idMenu}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    <Items/>
  </div>
</div>
</div>
    </>
  )
}

export default ItemListContainer
