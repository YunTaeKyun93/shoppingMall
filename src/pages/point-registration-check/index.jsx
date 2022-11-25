import { Tab, Tabs, Card, Button } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import useLogic from "./use-logic";

import Header from "./../../components/header";
const PointRegistraionCheckPage = () => {
  const logic = useLogic();
  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }
  const currentUser = logic.user;
  return (
    <div>
      <Header />
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="PointCheck" title="Point Check">
          <h1>
            {currentUser.name}님의 현재 포인트는 {currentUser.point}점 입니다.
          </h1>
        </Tab>
        <Tab eventKey="PointRegistraion" title="Point Registraion">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/coupon.png" />
            <Card.Body>
              <Card.Title>
                <h3>쿠폰등록</h3>
              </Card.Title>
              <Card.Text>
                <input
                  type="text"
                  value={logic.serialNumber}
                  onChange={(event) =>
                    logic.setSerialNumber(event.target.value)
                  }
                />
                <Button variant="primary" onClick={logic.onSubmit}>등록</Button>
             
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};
export default PointRegistraionCheckPage;
