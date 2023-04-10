import CartWidget from './CartWidget'

import React from 'react'

const NavBar = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">  
      <a class="navbar-brand" href="#">
      <img src="../img/MesondeLuz_Header.png" alt="Bootstrap" width="60" height="60"></img>
    </a>
    <a class="navbar-brand" href="#">El Meson de Luz</a>
  
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Nosotros</a>
        <a class="nav-link" href="#">Menu</a>
        <a class="nav-link" href="#" >Promo</a>
      </div>
        <div>  <a class="nav-link" href="#" ><CartWidget/></a></div>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default NavBar
