import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader";
import {
  Card,
  Button,
  Row,
  Col,
  Badge,
  Container,
  Dropdown
} from "react-bootstrap";
const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const db = JSON.parse(window.localStorage.getItem("db"));
  const products = db.products;
  const currentProduct = products.find((product) => {
    return product.id == id;
  });
  if (currentProduct == null) {
    return <h1>해당 상품을 찾을 수 없습니다.</h1>;
  }
  return (
    <div>
      <AdminHeader />
      <Container>
        <Card style={{ width: "1000px" }} className="my-5">
          <Card.Header>
            Product Info
            <Button
              variant="danger"
              style={{ float: "right" }}
              onClick={() => navigate("/admin/product-detail/:id/modification")}
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
                <Card.Text>Price : {currentProduct.price}</Card.Text>
                <Card.Text>Issue Date: {currentProduct.issueDate}</Card.Text>
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
