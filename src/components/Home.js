import React from 'react'
import Banner from './Banner'
import ItemListContainer from './ItemListContainer'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
       <div className='banner'>
    <div className='banner-Z img-fluid'> 
    <img src="../img/VistaBanner_CiudadCuenca-1.jpg" class="img-fluid" alt="VistaResto" ></img>
    <div className="reservation"> <h1>Reservation</h1>
     </div>
    </div> 
     </div> 
<motion.div
      initial={{ x:500, opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1,  y:-530, z:1 }}
      transition={{ duration: 2 }}
      whileHover={{ scale: 1.0 }}
> <Banner/> </motion.div>
<ItemListContainer/>
    </>
  )
}

export default Home
