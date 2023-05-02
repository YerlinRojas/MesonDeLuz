import CartWidget from './CartWidget'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div class = "barra">
    <div class="logoHome ">
    <Link class="navbar-brand" to= "/">
      <img src="../img/MesondeLuz_Header.png" alt="Logo" width="60" height="60" class="logo" />
    </Link>
    <h6>El Mezon de Luz</h6> 
</div>
  
    <nav class="navbar navbar-expand-lg bg-body-tertiary"> 
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link " aria-current="page" to="/">Home</Link>
        <Link class="nav-link " to="/category/almuerzo">Almuerzo</Link>
        <Link class="nav-link " to="/category/postre" >Postres</Link>
      </div>
        <div>  <Link class="nav-link" to="carrito" ><CartWidget/></Link></div>
    </div>
  </div>
</nav>
      </div>
    </>
  )
}

export default NavBar
