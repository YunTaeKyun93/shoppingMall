import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Card, Row, Col, Container } from "react-bootstrap";
import useLogic from "./use-logic";
import AdminHeader from "../../../components/AdminHeader";

const ProductModificationPage = () => {
  const logic = useLogic();


  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }
  const { product: currentProduct } = logic;

  // const currentProduct = products.find((product) => {
  //   return product.id == id;
  // });
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
                    onChange={(event) => logic.setName(event.target.value)}
                  />
                  <input
                    type="button"
                    value="수정하기"
                    onClick={logic.updateName}
                  />
                </Card.Title>
                <Card.Text>
                  Product Image : {currentProduct.imageUrl}
                  <input
                    type="text"
                    onChange={(event) => logic.setImageUrl(event.target.value)}
                  />
                  <input
                    type="button"
                    value="수정하기"
                    onClick={logic.updateImageUrl}
                  />
                </Card.Text>
                <Card.Text>
                  Price : {currentProduct.price}
                  <input
                    type="text"
                    onChange={(event) => logic.setPrice(event.target.value)}
                  />
                  <input
                    type="button"
                    value="수정하기"
                    onClick={logic.updatePrice}
                  />
                </Card.Text>
                <Card.Text>
                  Product Description : {currentProduct.description}
                  <input
                    type="text"
                    onChange={(event) =>
                      logic.setDescription(event.target.value)
                    }
                  />
                  <input
                    type="button"
                    value="수정하기"
                    onClick={logic.updateDescription}
                  />
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProductModificationPage;
