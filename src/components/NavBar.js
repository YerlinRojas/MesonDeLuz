import CartWidget from './CartWidget'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>

  <div className="navbar2">  
  <ul class="nav navbar1 ">
   <li >
    <Link className='nn' to="/home">Home</Link>
  </li>
  <li >
    <Link className='nn' to="/category/almuerzo">Almuerzo</Link>
  </li>
  <li>
    <Link className='nn' to="/category/postre" >Postres</Link>
  </li>
</ul>
<ul class="nav" >
  <li>
    <Link className='nn' to="/cart" ><CartWidget/></Link>
  </li>
</ul>
</div>

    </>
  )
}

export default NavBar
