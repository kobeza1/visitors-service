import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const FormComponent = ({ type, sendData, handleEdit, handleClose }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity()) {
      const data = { name, surname };
      if (type === "edit") {
        handleEdit(data);
        handleClose();
      } else {
        sendData(data);
        handleClose();
      }
    }

    setValidated(true);
  };

  const handleName = ({ target }) => {
    target.name === "name" ? setName(target.value) : setSurname(target.value);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          minLength={3}
          pattern="[A-Za-z]{1,32}"
          value={name}
          name="name"
          type="text"
          placeholder="John"
          autoFocus
          onChange={handleName}
        />
        {/* <Form.Control.Feedback type="invalid">
          Please choose First Name
        </Form.Control.Feedback> */}
        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
      </Form.Group>
      <Form.Group
        required
        className="mb-3"
        controlId="exampleForm.ControlInput2"
      >
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          minLength={3}
          pattern="[A-Za-z]{1,32}"
          value={surname}
          name="surname"
          type="text"
          placeholder="Smith"
          onChange={handleName}
        />
        {/* <Form.Control.Feedback type="invalid">
          Please choose Last Name
        </Form.Control.Feedback> */}
        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
      </Form.Group>
      <Modal.Footer style={{ border: "none" }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button type="submit" variant="dark">
          {type === "edit" ? "Edit" : "Add"}
        </Button>
      </Modal.Footer>
    </Form>
  );
};
