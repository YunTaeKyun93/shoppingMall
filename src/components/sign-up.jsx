import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import useUser from "../services/user";

const SignUP = () => {
  const user = useUser();

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              user.actions.setEmail(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            onChange={(event) => user.actions.setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => user.actions.setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUP;

// 인풋을 컴포넌트 화 해서 재활용 하려고 했는데 결국 setter용으로 써버리면 딴데서
// 모양은 쓸수 있지만 예를 들어 로그인 그치만 내용물이 달라서 재활용 가능할까??
// import React from "react";
// import { Form, Container } from "react-bootstrap";
// import EmailInput from "./email-input/";
// import UserName from "./user-name-input";
// import PasswordInput from "./password-input/index";
// import SubmitButton from "./submit-button/index";

// const SignUP = () => {
//   return (
//     <>
//       <Container className="mt-5">
//         <Form>
//           <EmailInput />
//           <UserName />
//           <PasswordInput />
//           <SubmitButton />
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default SignUP;
