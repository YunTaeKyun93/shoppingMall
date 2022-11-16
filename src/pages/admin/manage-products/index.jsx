import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import useLogic from "./use-logic";
import AdminHeader from "../../../components/AdminHeader";
import Product from "./../../../components/product";

const AdminManageProductsPage = () => {
  const navigate = useNavigate();
  const db = JSON.parse(window.localStorage.getItem("db"));
  const products = db.products;
  const logic = useLogic(products);
  return (
    <>
      <AdminHeader />
      <Row className="my-2">
        <Col>
          <Button
            variant="outline-primary"
            className="mx-2 my-2"
            onClick={() => navigate("/admin/create-product")}
          >
            상품 등록하기
          </Button>
          <Row>
            {products.map((product) => (
              <Col lg={2}>
                <Product key={product.serialNum} product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default AdminManageProductsPage;
