import React from "react";
import { Container, Form, Button, Accordion } from "react-bootstrap";
import Header from "../../components/header";
import useLogic from "./use-logic/index";
import styled from "styled-components";
import AdiminSignInPage from "./../admin/admin-sign-in/index";

const Div = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
  margin: 20px 0;
`;
const SignInPage = () => {
  const logic = useLogic();

  return (
    <div>
      <Header />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>User Login</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={logic.email}
                  onChange={(event) => {
                    logic.setEmail(event.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Admin Login</Accordion.Header>
          <Accordion.Body>
            <AdiminSignInPage />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Div />
    </div>
  );
};

export default SignInPage;
