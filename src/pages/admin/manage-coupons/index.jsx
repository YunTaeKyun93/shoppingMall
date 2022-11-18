import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import AdminHeader from "../../../components/AdminHeader";
import Coupon from "../../../components/coupon";
import { useNavigate } from "react-router-dom";
import useLogic from "./use-logic";


const CheckBoxCon = styled.div`
  width: 18rem;
  height: 25px;
  border: 1px solid royalblue;
  border-radius: 5px;
  border-top: none;
`;

const getDb = async () => JSON.parse(window.localStorage.getItem("db"));
// window.localStorage.getItem

const AdminManageCouponsPage = () => {
  const navigate = useNavigate();

  // const [db, setDb] = useState(undefined);

  // useEffect(() => {
  //   const impl = async () => {
  //     setDb(await getDb());
  //   };

  //   impl();
  // }, []);

  // const db = JSON.parse(window.localStorage.getItem("db"));

  const logic = useLogic();

  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }

  const coupons = logic.coupons;

  // console.log(
  //   "COUPONS: ",
  //   coupons.map((currentCoupon) => logic.isCouponChecked(currentCoupon.id))
  // );



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
          {/* <Button
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
          </Button> */}
        </Col>
      </Row>

      <Row>
        {coupons.map((coupon) => (
          <Col lg={2} key={coupon.serialNum}>
            <Coupon coupon={coupon} />
            <CheckBoxCon>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Check this switch"
                  checked={logic.isCouponChecked(coupon.id)}
                  onChange={() => logic.toggleIsCouponChecked(coupon.id)}
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
