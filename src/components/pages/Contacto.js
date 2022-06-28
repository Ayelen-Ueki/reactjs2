import React, { useState } from "react";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import MessageSuccess from "../MessageSuccess/MessageSuccess";
import "./Contacto.css"

const initialState = {
  name: "",
  email: "",
  address: "",
};

const Contacto = () => {
  const [contacto, setContacto] = useState(initialState);
  const [contactoID, setContactoId] = useState("");

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
          placeholder="something@idk.cool"
          type="email"
          value={contacto.email}
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="exampleAddress">
          Address
        </Label>
        <Input
          id="exampleAddress"
          name="address"
          placeholder="Where do you live?"
          type="address"
          value={contacto.address}
          onChange={onChange}
        />
      </FormGroup>
      <Button>Submit</Button>
      {contactoID && <MessageSuccess contactoID={contactoID} />}
    </Form>
  );
};

export default Contacto;
