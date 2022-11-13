import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';

const Coupon = () => {
    const db = JSON.parse(window.localStorage.getItem('db'));
    const coupons = db.coupons;
    console.log(coupons);

    return (
        <Row>
            {coupons.map((coupon) => (
                <Col key={coupon.id} lg={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/img/coupon.png" />
                        <Card.Body>
                            <Card.Title>Coupon Name: {coupon.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Ponit Amout : {coupon.pointAmount}</ListGroup.Item>
                            <ListGroup.Item>IssueDate : {coupon.issueDate}</ListGroup.Item>
                            <ListGroup.Item>Usage status:
                                {coupon.usageStatus && <p>사용불가능</p>}
                                {!coupon.usageStatus && <p>사용 가능</p>}
                            </ListGroup.Item>
                            <ListGroup.Item>UsedDate:{coupon.usedDate && `${coupon.usedDate}`}  </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>

    )
}
export default Coupon;


