import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Header from "./../../components/header";
import useLogic from "./use-logic";

const SignUP = () => {
  const logic = useLogic();

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => {
                logic.setEmail(event.target.value);
              }}
              value={logic.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              onChange={(event) => {
                logic.setName(event.target.value);
              }}
              value={logic.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => {
                logic.setPassword(event.target.value);
              }}
              value={logic.password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={logic.onSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUP;

// A                           B
// **************************************
//                   |
//                   |
//                   |
//                   |
//                   |
//                   |
//                   |
//                   |
//                   |
//                   |
//                   |
//                   |
// ***************************************

// const loadProducts = useLoadProducts();

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   // 로딩, setProducts를 호출
// }, []);

//
