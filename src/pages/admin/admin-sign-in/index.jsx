import React from "react";
import { Form, Button } from "react-bootstrap";
import useLogic from "./use-logic/index";

const AdiminSignInPage = () => {
  const logic = useLogic();
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address(Admin)</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={logic.email}
            onChange={(event) => {
              logic.setEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password(Admin)</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={logic.password}
            onChange={(event) => {
              logic.setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          value={"로그인"}
          onClick={(event) => {
            logic.login();
          }}
        >
          로그인
        </Button>
      </Form>
    </>
  );
};

export default AdiminSignInPage;
