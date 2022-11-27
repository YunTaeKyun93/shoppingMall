import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

import useLogic from "./use-logic";
import AdminHeader from "../../../components/AdminHeader";

const ProductDetailPage = () => {
  const navigate = useNavigate();

  const logic = useLogic();

  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }

  const currentProduct = logic.product;

  if (currentProduct == null) {
    return <h1>해당 상품을 찾을 수 없습니다.</h1>;
  }

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
            Product Info
            <Button
              variant="light"
              style={{ float: "right" }}
              onClick={() =>
                navigate(`/admin/product-detail/${logic.id}/modification`)
              }
            >
              Modification
            </Button>
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
                <Card.Title>Product Name: {currentProduct.name}</Card.Title>
                <Card.Text>Product Id : {currentProduct.id}</Card.Text>
                <Card.Text>Price : {currentProduct.price.toLocaleString()}</Card.Text>
                <Card.Text>Issue Date: {currentProduct.issueDate.toLocaleString()}</Card.Text>
                <Card.Text>
                  Product Description : {currentProduct.description}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
