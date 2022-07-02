import React, { useState, useContext } from "react";
import { Form, Input, FormGroup, Label, Button, FormText } from "reactstrap";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import "./Contacto.css";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./CarritoCompra.css";

const CartOrder = () => {
  const { totalPrice, cartListItems, cleanCartProducts } =
    useContext(CartContext);
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

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

  const finishOrder = () => {
    navigate("/");
    cleanCartProducts();
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
    console.log(newOrder);
    const orderFirebase = collection(db, "orders");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    console.log("orden generada: ", orderDoc.id);
    setSuccess(orderDoc.id);
  };

  return (
    <Container className="container-general">
      {success ? (
        <Modal
          title={"Compra exitosa"}
          open={success}
          handleClose={finishOrder}
        >
          <div>
            La orden se generó con éxito. Número de orden: {success}{" "}
            <button onClick={finishOrder}>Aceptar</button>
          </div>
        </Modal>
      ) : (
        <Form className="Form">
          <FormText className="formRequest">
            (Por favor, completa con tus datos para finalizar el pedido)
          </FormText>
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
            <Button style ={{cursor:"pointer"}} className="finish" onClick={onSubmit}>
              Finalizar
            </Button>
          </Link>
        </Form>
      )}
    </Container>
  );
};

export default CartOrder;
