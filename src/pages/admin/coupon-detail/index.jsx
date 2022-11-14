import { useParams } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader";
import { Card, Button, Row, Col, Badge, Container } from "react-bootstrap";

const CouponDetailPage = () => {
  const { serialNum } = useParams();
  const db = JSON.parse(window.localStorage.getItem("db"));
  const coupons = db.coupons;
  const currentCoupon = coupons.find((coupon)=>{return coupon.serialNum == serialNum })
  // 나중에 시리얼넘버 해결하면 이걸로 교체할 것 
  // 이유 => 만약 관리페이지에서 정렬기능을 넣으면 로컬 스토리지 순서도 바뀐다면??
  // 원하는 페이지가 안나올수도?? 지금은 index값을 햇기 때문에 무조건 순서가 바뀜
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
