import React, { useState } from "react";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import MessageSuccess from "../MessageSuccess/MessageSuccess";
import "./Contacto.css"

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const Contacto = () => {
  const [contacto, setContacto] = useState(initialState);
  const [contactoID, setContactoId] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setContacto({ ...contacto, [name]: value });
  };

  
  const onSubmit = (e) => {
    e.preventDefault();
    setContacto({ ...contacto, contacto: contacto });
    saveData({ ...contacto, contacto: contacto });
  };

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "contacto");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    setContactoId(orderDoc.id);
    setContacto(initialState);
  };

  return (
    <Form  className="Form">
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="exampleName">
          Name
        </Label>
        <Input
          id="exampleName"
          name="name"
          placeholder="Please, enter your name"
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
          name="phone"
          placeholder="A dónde podemos llamarte?"
          type="phone"
          value={contacto.phone}
          onChange={onChange}
        />
      </FormGroup>
      <Button onSubmit={onSubmit}>Submit</Button>
      {contactoID && <MessageSuccess contactoID={contactoID} />}
      
    </Form>
  );
};

export default Contacto;
