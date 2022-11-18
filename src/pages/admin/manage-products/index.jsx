import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import useLogic from "./use-logic";
import AdminHeader from "../../../components/AdminHeader";
import Product from "./../../../components/product";

const AdminManageProductsPage = () => {
  const navigate = useNavigate();

  const logic = useLogic();

  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }

  const products = logic.products;
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
              <Col lg={2} key={product.id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default AdminManageProductsPage;
