import React from "react";
import { Form, Button } from "react-bootstrap";

const SubmitButton = () => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
};

export default SubmitButton;
