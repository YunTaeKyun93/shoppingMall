import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../services/auth";

const AdminHeader = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          Administrator mode
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/admin/create-coupon')}>쿠폰발급</Nav.Link>
            <Nav.Link  onClick={()=>navigate('/admin/manage-coupons')}>쿠폰관리</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => auth.logout()}>로그아웃</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
