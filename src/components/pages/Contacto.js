import React, { useState, useContext } from "react";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import MessageSuccess from "../MessageSuccess/MessageSuccess";
import "./Contacto.css";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom"

const Contacto = () => {
  const { totalPrice, cartListItems, cleanCartProducts } =
    useContext(CartContext);

  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const orderState = {
    buyer: {},

    items: cartListItems.map((items) => {
      return { 
        id: items.id,
        title: items.title, 
        price: items.price };
    }),
    total: totalPrice,
  };

  const [contacto, setContacto] = useState(initialState);
  const [contactoID, setContactoId] = useState("");
  const navigate=useNavigate()
  const [orders, setOrders] = useState(orderState);
  
  const finishOrder = () => {
    navigate('/')
}

  const onChange = (e) => {
    const { value, name } = e.target;
    setContacto({ ...contacto, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "contacto"), {
      contacto,
    });
    setContactoId(docRef.id);
    setContacto(initialState);
    setOrders({ ...orders, buyer: contacto });
    pushToFirebase(orders);
  };

  const pushToFirebase = async (newOrders) => {
    const ordersFirebase = collection(db, "orders");
    const ordersDoc = await addDoc(ordersFirebase, newOrders);
    console.log(ordersDoc);
    cleanCartProducts()
    finishOrder()
  };

  return (
    <Form onSubmit={onSubmit} className="Form">
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
        <Label className="me-sm-2" for="examplePhone">
          Celular
        </Label>
        <Input
          id="examplePhone"
          name="address"
          placeholder="Cuál es tu número telefónico?"
          type="phone"
          value={contacto.phone}
          onChange={onChange}
        />
      </FormGroup>
      <Button>Submit</Button>
      {contactoID && <MessageSuccess contactoID={contactoID} />}
    </Form>
  );
};

export default Contacto;
