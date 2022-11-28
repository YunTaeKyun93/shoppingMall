import React from "react";
import Header from "./../../components/header";
import { Card, ListGroup } from "react-bootstrap";
import useLogic from "./use-logic";

const MyPage = () => {
  const logic = useLogic();
  const user = logic.user;
  return (
    <div>
      <Header />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/img/USER.png" />
        <Card.Body>
          <Card.Title>User Info</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>User Id : {user.id}</ListGroup.Item>
          <ListGroup.Item>User Name : {user.name}</ListGroup.Item>
          <ListGroup.Item>
            User E-Mail : {user.email}
            <input
              type="email"
              onChange={(event) => logic.setEmail(event.target.value)}
            />
            <input type="button" value="수정하기" onClick={logic.updateEmail} />
          </ListGroup.Item>
          <ListGroup.Item>User Point : {user.point}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <p>PW변경</p>
          <input
            type="text"
            onChange={(event) => logic.setPassword(event.target.value)}
          />
          <input type="button" value="수정하기" onClick={logic.updateEmail} />
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyPage;
