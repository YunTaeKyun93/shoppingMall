import React from "react";
import { Form } from "react-bootstrap";

const UserNameInput = () => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Name" />
    </Form.Group>
  );
};

export default UserNameInput;
