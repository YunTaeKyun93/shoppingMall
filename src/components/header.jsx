import { React, useEffect, useState } from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../services/auth";

const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const id = auth.loggedInUserId;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Shopping Mall</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate(`/point-restration-check/`)}>
              Point
            </Nav.Link>
            <Nav.Link onClick={()=>navigate('/storage-box')}>Storage Box</Nav.Link>
            <Nav.Link onClick={()=>navigate('/product-purchase-detail')}>Product Purchace Detail</Nav.Link>

          </Nav>
          <Nav>
            {auth.isLoggedIn && (
              <>
                <Nav.Link onClick={() => navigate("/my-page")}>MyPage</Nav.Link>
                <Nav.Link onClick={() => auth.logout()}>로그아웃</Nav.Link>
              </>
            )}
            {!auth.isLoggedIn && (
              <>
                <Nav.Link onClick={() => navigate("/sign-up")}>
                  Sign Up
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/sign-in")}>
                  Sign In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
