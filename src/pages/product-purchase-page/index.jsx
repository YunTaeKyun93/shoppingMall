import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./../../components/header";

import useLogic from "./use-logic";

const ProductPurchasePage = () => {
  const logic = useLogic();
  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }
  const currentProduct = logic.product;
  const user = logic.user;
  return (
    <div>
      <Header />
      <Container className="my-5">
        <Row>
          <Col lg={12} md={12}>
            <img
              src={currentProduct?.imageUrl}
              alt={currentProduct?.name}
              width={"100%"}
            />
          </Col>

          <Col lg={12} md={12}>
            <Card>
              <Card.Body>
                <Card.Title>Product Name: {currentProduct.name}</Card.Title>
                <Card.Text>Price : {currentProduct.price}</Card.Text>
                <Card.Text>User Point : {user.point}</Card.Text>
                <Button variant="primary" onClick={logic.onSubmit}>구매하기</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPurchasePage;
