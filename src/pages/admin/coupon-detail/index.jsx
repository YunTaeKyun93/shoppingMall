import { useParams } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader";
import { Card, Button, Row, Col, Badge, Container } from "react-bootstrap";

const CouponDetailPage = () => {
  const { serialNum } = useParams();
  const db = JSON.parse(window.localStorage.getItem("db"));
  const coupons = db.coupons;
  console.log(coupons);
  return (
    <div>
      <AdminHeader />
      <Container>
        <Card style={{ width: "1000px" }} className="my-5">
          <Card.Header>
            Coupon Info
            {coupons[serialNum]?.usedDate && (
              <Button variant="danger" style={{ float: "right" }}>
                Delete
              </Button>
            )}
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
                <Card.Title>Coupon Name: {coupons[serialNum].name}</Card.Title>
                {/* <Card.Text>Ponit Amout :  {coupons[serialNum]}.pointAmount</Card.Text> */}
                <Card.Text>
                  Usage status:
                  {coupons[serialNum].usageStatus && (
                    <Badge bg="danger" className="mx-2">
                      사용 불가능
                    </Badge>
                  )}
                  {!coupons[serialNum].usageStatus && (
                    <Badge bg="primary" className="mx-2">
                      사용 가능
                    </Badge>
                  )}
                </Card.Text>
                {/* <Card.Text>Issue Date: {coupons[serialNum]}.issueDate</Card.Text> */}
                <Card.Text
                  style={{
                    borderBottom: "1px solid gray",
                    marginBottom: "2px"
                  }}
                >
                  Used Date: {coupons[serialNum].usedDate}
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
