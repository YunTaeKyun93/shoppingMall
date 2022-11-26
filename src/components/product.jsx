import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../services/auth";
const Product = ({ product }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  // console.log(auth.isAdminLoggedIn);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${product.imageUrl}`} alt={product.name} />
      <Card.Body>
        <Card.Title> Name: {product.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price : {product.price.toLocaleString()}</ListGroup.Item>
      </ListGroup>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Issue Date : {product.issueDate.toLocaleString()}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {auth.isAdminLoggedIn && (
          <Card.Text
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/admin/product-detail/${product.id}`);
            }}
          >
            상세페이지
          </Card.Text>
        )}
        {auth.isLoggedIn && (
          <Card.Text
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product-detail/${product.id}`);
            }}
          >
            상세페이지
          </Card.Text>
        )}
           {!auth.isLoggedIn && (
          <Card.Text
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product-detail/${product.id}`);
            }}
          >
            상세페이지
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
