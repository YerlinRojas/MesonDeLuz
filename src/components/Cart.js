
import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import { addDoc, collection } from 'firebase/firestore'
import { db } from './firebase/setting'
import { Container, Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'

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
  .then (({ id }) => 
 Swal
  .fire(`Tu id de compra`,
    ((id)),
'success',
    { 
          confirmButtonText: "Inicio",
          timer: 4500
  })
  .then(resultado => {
      if (resultado.value) {
        window.location.href = "./";
      } 
  }) 

  )
}


return (
  <>
  
  
       {
          cart.map(product => <ItemCart key={product.id} product={product}/>)   
       } 
        <p className='totalCompra' >Total a Pagar : $ {totalPrice()}</p>
    
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
