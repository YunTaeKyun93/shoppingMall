import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import AdminHeader from "../../../components/AdminHeader";
import Coupon from "../../../components/coupon";
import { useNavigate } from "react-router-dom";
import useLogic from "./use-logic";
import styled from "styled-components";

const CheckBoxCon = styled.div`
  width: 18rem;
  height: 25px;
  border: 1px solid royalblue;
  border-radius: 5px;
  border-top: none;
`;

const AdminManageCouponsPage = () => {
  const navigate = useNavigate();
  const db = JSON.parse(window.localStorage.getItem("db"));
  const coupons = db.coupons;
  const logic = useLogic({ coupons });
  return (
    <div>
      <AdminHeader />
      <Row className="my-2">
        <Col>
          <Button
            variant="outline-primary"
            className="mx-2"
            onClick={() => navigate("/admin/create-coupon")}
          >
            쿠폰 발급하기
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => logic.sortCuponList()}
          >
            정렬하기
          </Button>
          <Button
            variant="outline-danger"
            className="mx-2"
            onClick={() => logic.sortCuponList()}
          >
            삭제하기
          </Button>
        </Col>
      </Row>

      <Row>
        {coupons.map((coupon) => (
          <Col lg={2}>
            <Coupon key={coupon.serialNum} coupon={coupon} />
            <CheckBoxCon>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Check this switch"
                  checked={coupons.isCheckedCoupon}

                   onChange={(event)=>event.target.value}
                  
                />
              </Form>
            </CheckBoxCon>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AdminManageCouponsPage;
