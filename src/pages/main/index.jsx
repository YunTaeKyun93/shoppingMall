import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Row, Col } from "react-bootstrap";
import Product from "./../../components/product";

import Header from "../../components/header";
import useAuth from "../../services/auth";
import useLogic from "./use-logic";
const MainPagePage = () => {
  const logic = useLogic();
  const auth = useAuth(); // import
  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }

  const products = logic.products;
  return (
    <div>
      {/* {!auth.isLoggedIn && !auth.isAdminLoggedIn && <Header />}
      {auth.isLoggedIn && <Header />} */}
      <Header />
      <Row>
        {products.map((product) => (
          <Col lg={2} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainPagePage;
