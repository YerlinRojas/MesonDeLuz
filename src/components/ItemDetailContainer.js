import React, { useState, useEffect } from 'react'

import ItemDetail from './ItemDetail'
import {  doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { db } from './firebase/setting'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null)
    
    const {itemId} = useParams ()
    

    useEffect (()=>{
        const queryDoc = doc(db, "ProductsColletion", itemId)
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data()}))
        .catch (error => console.log(error))
    },[itemId])



    
    return (
      
        <ItemDetail {...product}/>
      

    )

}

export default ItemDetailContainer
