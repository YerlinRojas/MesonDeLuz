
import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import { addDoc, collection } from 'firebase/firestore'
import { db } from './firebase/setting'
import { Container, Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const Cart = () => {

 const [usuario, setUsuario]=useState ({})



const {cart, totalPrice} = useContext (CartContext)


const formik = useFormik({
  initialValues : {
    username:"",
    lastname: "",
    dni: "",
    direction:"",
    telephon:"",
    email:""

  },

  validationSchema: Yup.object ({
    username: Yup.string().required(),
    lastname: Yup.string().required(),
    dni: Yup.number().required(),
    direction: Yup.string().required(),
    telephon: Yup.number().required(),
    email: Yup.string().email("No es email valido").required("Campo obligatorio")
  }),

onSubmit: (e) =>{
setUsuario({...usuario,
    [e.target.name]:e.target.value
  })  
  alert("gracias por tu compra") 
   
} 

}) 



  
const order = {
  usuario : usuario,
  item : cart.map (product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
  total: totalPrice()
}

const handleOrder = () => {
  const orderCollection = collection(db, "orders")
  addDoc(orderCollection, order)
  .then (({ id }) => console.log(id))

}


if (cart.length === 0){

  return (
    <div class= "avisoCart">
      <h2>Aun no has elegido nada para comprar</h2>
    <Link to= "/" ><button type="button" class="btn btn-warning">Seguir Comprando</button></Link>
    </div>
  )

}

return (
  <>
  
  
       {
          cart.map(product => <ItemCart key={product.id} product={product}/>)   
       } 
        <p>Total : $ {totalPrice()}</p>
    
       <Container
       style = {{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
       }}
       >
        <h1>Formulario</h1>
        <Form style= {{width : "30%"}} onSubmit={formik.handleSubmit}>

          <Form.Input type= "text" placeholder="Nombre"  name="username" onChange={formik.handleChange} error={formik.errors.username && true} value={formik.values.username} />
          <Form.Input type= "text" placeholder="Apellido"  name="lastname" onChange={formik.handleChange} error={formik.errors.lastname && true} value={formik.values.lastname}/>
          <Form.Input type= "text" placeholder="DNI"  name="dni" onChange={formik.handleChange} error={formik.errors.dni && true} value={formik.values.dni}/>
          <Form.Input type= "text" placeholder="Direccion"  name="direction" onChange={formik.handleChange} error={formik.errors.direction && true}value={formik.values.direction} />
          <Form.Input type= "text" placeholder="Telefono"  name="telephon" onChange={formik.handleChange}  error={formik.errors.telephon && true} value={formik.values.telephon}/>
          <Form.Input type= "email" placeholder="Email"  name="email" onChange={formik.handleChange} error={formik.errors.email} value={formik.values.email} />
          
          <Button onClick={handleOrder} type="summit" class="btn btn-warning"> Generar Orden</Button>
          <Button type="button" class="btn btn-warning"><Link to= "/"> Seguir Comprando</Link></Button>
        </Form>


       </Container>
 


    </>
  )


}


export default Cart




/* <form class="row g-3 needs-validation" required >

  <div class="col-md-4">
    <label class="form-label">First name</label>
    <input 
    name='nombre' 
    type="text" 
    class="form-control" 
    id="validationServer01" required
    onChange={handleClick}
    ></input>

  </div>

  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input 
    name='apellido'  onChange={handleClick} type="text" class="form-control" id="lastName"  required></input>
    <div class="valid-feedback">
      Aprobado
    </div>
  </div>

  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">email</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input name='email' onChange={handleClick} type="text" class="form-control" id="email" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required></input>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Ingrese email.
      </div>
      </div>
  </div>

  <div class="col-md-6">
    <label for="validationServer03" class="form-label">Ciudad</label>
    <input name='ciudad' onChange={handleClick} type="text" class="form-control" id="city" aria-describedby="validationServer03Feedback" required></input>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Ingrese ciudad valida.
    </div>
  </div>

  <div class="col-md-6">
    <label for="validationServer04" class="form-label">Pais</label>
    <input name='pais' onChange={handleClick} type="text" class="form-control" id="country" aria-describedby="validationServer03Feedback" required></input>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Ingrese pais valido.
    </div>
  </div>

  <div class="col-md-3">
    <label for="validationServer06" class="form-label">Codigo Postal</label>
    <input name='zip' onChange={handleClick} type="text" class="form-control" id="zip" aria-describedby="validationServer05Feedback" required></input>
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required></input>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
    </div>
  </div>
    
     <div>
     <di>
      
     </di>
    <div>
     <Link to= "/"> <button  type="button" class="btn btn-warning"> Seguir Comprando</button></Link>
     </div>
     </div>
</form> */