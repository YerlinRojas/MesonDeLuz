import React, { useEffect, useState } from 'react'
import data from '../data/MOCK_DATA.json'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'

function ItemListContainer () {


const [productos, setProductos] = useState([])

const pedirproductos = () => {
  return new Promise ((res) =>{
    setTimeout (() => {
       res (data)
    }, 500)
  }) 
}

const perdirProductoByCategory = (productCategory ) => {
  return new Promise ((res) => {
      setTimeout (() => {
          res(data.filter(prod=> prod.category === productCategory))
      },500)
  })
}

const {categoryId} = useParams ()

  useEffect (()=>{

    const asyncFunc = categoryId ? perdirProductoByCategory : pedirproductos

    asyncFunc (categoryId)
    .then (res => {
      setProductos(res)
    })
    .catch (error => {
      console.error (error)
    })
    


  },[categoryId])

  return (
  
  <ItemList productos ={productos}/>

  )
}

export default ItemListContainer
