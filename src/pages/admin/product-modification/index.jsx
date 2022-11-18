import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Card, Row, Col, Container } from "react-bootstrap";

import useLogic from "./use-logic";
import AdminHeader from "../../../components/AdminHeader";

const ProductModificationPage = () => {
  const { id } = useParams();
  const logic = useLogic();

  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }
  const products = logic.products;

  const currentProduct = products.find((product) => {
    return product.id == id;
  });
  return (
    <div>
      <AdminHeader />
      <Container>
        <Card style={{ width: "1000px" }} className="my-5">
          <Card.Header
            style={{
              background: "royalblue",
              color: "white",
              fontSize: "18px"
            }}
          >
            Product Modificataion
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4}>
                <Card.Img
                  variant="top"
                  src={`${currentProduct.imageUrl}`}
                  style={{ width: "300px" }}
                />
              </Col>
              <Col lg={8}>
                <Card.Title>
                  Product Name: {currentProduct.name}
                  <input
                    type="text"
                    onChange={(event) => logic.changeValue(logic.setName(event.target.value))}
                  />
                 
                </Card.Title>
                <Card.Text>Product Image : {currentProduct.imageUrl}</Card.Text>
                <Card.Text>Price : {currentProduct.price}</Card.Text>
                <Card.Text>
                  Product Description : {currentProduct.description}
                </Card.Text>
                <button onClick={()=>logic.updateValue()}>수정하기</button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProductModificationPage;
