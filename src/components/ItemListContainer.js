import React, { useEffect, useState } from 'react'

import ItemList from './ItemList'
import { collection,getDocs, query, where } from 'firebase/firestore'

import { useParams } from 'react-router-dom'
import { db } from './firebase/setting'

function ItemListContainer () {


const [productos, setProductos] = useState([])



const {categoryId} = useParams ()

  useEffect (()=>{
    const queryCollection= collection(db, "ProductsColletion")

    if (categoryId) {
    const queryFilter = query(queryCollection, where("category","==", categoryId))
    getDocs(queryFilter)
    .then(res => setProductos ( res.docs.map(productos => ({id: productos.id, ...productos.data()}))))
    .catch(error => console.log(error))
    }else{
      getDocs(queryCollection)
    .then(res => setProductos ( res.docs.map(productos => ({id: productos.id, ...productos.data()}))))
    .catch(error => console.log(error))
    }
    


  },[categoryId])

  return (
  
  <ItemList productos ={productos}/>

  )
}

export default ItemListContainer
