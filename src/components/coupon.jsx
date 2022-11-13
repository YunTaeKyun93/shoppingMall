import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Coupon = () => {
    const db = JSON.parse(window.localStorage.getItem('db'));
    const coupons = db.coupons;
    const navigate = useNavigate();
    console.log(coupons);
    // 쿠폰은 최근발급순 || 생각 더 해보기 발급일자로 할지 고유 시리얼 넘버로 할지 
    // 쿠폰이름, 발급번호, 지급액수, 사용여부, 발급일자, 사용일자 ||해결
    // 쿠폰추가 버튼을 누르면 쿠폰발급 페이지로 이동  || 해결
    // 쿠폰 리스트에서 특정 쿠폰을 누르면 해당 쿠폰의 상세페이지로 이동
    // 목록에서 쿠폰은 체크박스로 선택가능 삭제 버튼을 누르면 해당 쿠폰 삭제가능
    // 사용된 쿠폰은 삭제 불가능 사용하지 않은 쿠폰만 삭제가능
    return (
        <Row>
            <Col lg={12} className="my-3">
                <Button onClick={() => navigate('/admin/create-coupon')}> 쿠폰 발급하기</Button>
            </Col>
            {coupons.sort((a, b) => b - a).map((coupon) => (
                <Col key={coupon.serialNum} lg={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/img/coupon.png" />
                        <Card.Body>
                            <Card.Title>Coupon Name: {coupon.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Coupon Serial Code : {coupon.id}</ListGroup.Item>
                            <ListGroup.Item>Ponit Amout : {coupon.pointAmount}</ListGroup.Item>
                            <ListGroup.Item>IssueDate : {coupon.issueDate}</ListGroup.Item>
                            <ListGroup.Item>Usage status:
                                {coupon.usageStatus && <p>사용불가능</p>}
                                {!coupon.usageStatus && <p>사용 가능</p>}
                            </ListGroup.Item>
                            <ListGroup.Item>UsedDate:{coupon.usedDate && `${coupon.usedDate}`}  </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Text style={{ cursor: 'pointer' }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // navigate(`/admin/coupon-detail/${coupon.serialNum}`)
                                }}>
                                상세페이지</Card.Text>
                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>

    )
}
export default Coupon;


