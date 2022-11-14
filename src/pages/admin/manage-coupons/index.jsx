import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import AdminHeader from "../../../components/AdminHeader";
import Coupon from "../../../components/coupon";
import { useNavigate } from "react-router-dom";

const AdminManageCouponsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AdminHeader />
      <Row className="my-2">
        <Col>
          <Button
            onClick={() => navigate("/admin/create-coupon")}
            className="mx-2"
          >
            쿠폰 발급하기
          </Button>
          <Button onClick={() => navigate("/admin/create-coupon")}>
            정렬하기
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Coupon />
        </Col>
      </Row>
    </div>
  );
};

export default AdminManageCouponsPage;
