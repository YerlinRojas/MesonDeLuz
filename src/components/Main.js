import React from 'react'
import ItemListContainer from './ItemListContainer'
import { Route,Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'

const Main = () => {
  return (
<Routes>
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
    <Route path='/item/:itemId' element= {<ItemDetailContainer/>} />
    <Route path='/carrito' element= {<p>carrito</p>}/>
</Routes>

  )
}

export default Main
