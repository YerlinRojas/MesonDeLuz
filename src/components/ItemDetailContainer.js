import React, { useState, useEffect } from 'react'
import data from '../data/MOCK_DATA.json'
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null)
    
    const perdirProductoById = (productId ) => {
        return new Promise ((res) => {
            setTimeout (() => {
                res(data.find(prod=> prod.id === productId))
            },500)
        })
    }
    
    const {itemId} = useParams ()
    

    useEffect (()=>{
        perdirProductoById(itemId)
        .then(res=> {
            setProduct(res)
        })
        .catch(error => {
            console.error(error)
        })
    },[itemId])



    
    return (
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer
