import React, { useState, useContext } from "react";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import "./Contacto.css";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import Modal from '../modal/Modal'
import TextField from '@mui/material/TextField';
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const CartOrder = () => {
  const { totalPrice, cartListItems, cleanCartProducts } =
    useContext(CartContext);
    const [showModal, setShowModal] = useState(false)
  const [contacto, setContacto] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [contact, setContact] = useState({
    buyer: {},
    items: cartListItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
      };
    }),
    total: totalPrice,
  });
  const [success, setSuccess] = useState()
  const navigate = useNavigate();

  const finishOrder = () => {
    navigate("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setContact({ ...contact, buyer: contacto });
    saveData({ ...contact, buyer: contacto });
  };

  const onChange = (e) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  };

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "orders");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    console.log("orden generada: ", orderDoc.id);
    setSuccess(orderDoc.id)
    cleanCartProducts();
  };

  return (
    <Container className='container-general'> 
    <Form className="Form">
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="exampleName">
          Name
        </Label>
        <Input
          id="exampleName"
          name="name"
          placeholder="Por favor, ingrese su nombre"
          type="name"
          value={contacto.name}
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="algo@mail.com"
          type="email"
          value={contacto.email}
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="exampleNumber">
          Celular
        </Label>
        <Input
          id="exampleNumber"
          name="number"
          placeholder="+54 11 ..."
          type="number"
          value={contacto.number}
          onChange={onChange}
        />
      </FormGroup>
      <Link to="/">
      <Button onSubmit={onSubmit} onClick={()=>setShowModal(true)} >Submit</Button>
      </Link>
    </Form>
    <Modal title={success ? 'Compra exitosa' : 'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
    {success ? (
        <div>
            La order se genero con exito!
            Numero de orden: {success}
            <button onClick={finishOrder}>Aceptar</button>
        </div>
    ) : (
        <form className="form-contact" onSubmit={onSubmit}>
            <TextField 
                id="outlined-basic" 
                name="name"
                label="Nombre y Apellido" 
                variant="outlined" 
                value={contacto.name}
                onChange={onChange}
            />
            <TextField 
                id="outlined-basic" 
                name="phone"
                label="Telefono" 
                variant="outlined" 
                value={contacto.phone}
                onChange={onChange}
            />
            <TextField 
                id="outlined-basic" 
                name="email"
                label="Mail" 
                value={contacto.email}
                variant="outlined" 
                onChange={onChange}
            />
            <button type="submit">Enviar</button>
            
        </form>
    )}
    
</Modal>
</Container>
  );
};

export default CartOrder;

