import { Card, Button, Row, Col, Badge, Container } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";

import useLogic from "./use-logic";
import AdminHeader from "../../../components/AdminHeader";


const CouponDetailPage = () => {
  const logic = useLogic();

  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }

 const currentCoupon = logic.coupon

  return (
    <div>
      <AdminHeader />
      <Container>
        <Card style={{ width: "1000px" }} className="my-5">
          <Card.Header>
            Coupon Info
            {!currentCoupon.usedDate && (
              <Button variant="danger" style={{ float: "right" }} onClick={()=>logic.deleteCurrentCoupon()}>
                Delete
              </Button>
            )}
            {/* {!currentCoupon.usedDate && (
              <Button  variant="danger" disabled style={{ float: "right" }}>
                Delete
              </Button>
            )} */}
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4}>
                <Card.Img
                  variant="top"
                  src="/img/coupon.png"
                  style={{ width: "300px" }}
                />
              </Col>
              <Col lg={8}>
                <Card.Title>Coupon Name: {currentCoupon.name}</Card.Title>
                <Card.Text>Ponit Amout : {currentCoupon.pointAmount}</Card.Text>
                <Card.Text>
                  Usage status:
                  {currentCoupon.usageStatus && (
                    <Badge bg="warning" className="mx-2">
                      사용 불가능
                    </Badge>
                  )}
                  {!currentCoupon.usageStatus && (
                    <Badge bg="success " className="mx-2">
                      사용 가능
                    </Badge>
                  )}
                </Card.Text>
                <Card.Text>Issue Date: {currentCoupon.issueDate}</Card.Text>
                <Card.Text
                  style={{
                    borderBottom: "1px solid gray",
                    marginBottom: "2px"
                  }}
                >
                  Used Date: {currentCoupon.usedDate}
                </Card.Text>
                <Card.Text>Used User Id: userID</Card.Text>
                <Card.Text>Used User Db Id: user Db Id</Card.Text>
                <Card.Text>Used User Name: userName</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CouponDetailPage;
