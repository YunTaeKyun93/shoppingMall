import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../services/auth";

const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Shopping Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">null</Nav.Link>
            <Nav.Link href="#pricing">null</Nav.Link>
          </Nav>
          <Nav>
            {auth.isLoggedIn && (
              <>
                <Nav.Link onClick={() => navigate("/my-page")}>MyPage</Nav.Link>
                <Nav.Link onClick={() => navigate("/")}>로그아웃</Nav.Link>
              </>
            )}

            <Nav.Link onClick={() => navigate("/sign-up")}>Sign Up</Nav.Link>
            <Nav.Link onClick={() => navigate("/sign-in")}>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
