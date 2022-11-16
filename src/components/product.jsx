import React from "react";
import { Card, ListGroup, Row, Col, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${product.imageUrl}`} alt={product.name} />
      <Card.Body>
        <Card.Title> Name: {product.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price : {product.price}</ListGroup.Item>
      </ListGroup>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Issue Date : {product.issueDate}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/admin/product-detail/${product.id}`);
          }}
        >
          상세페이지
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
