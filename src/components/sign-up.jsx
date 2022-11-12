import React, {useState} from "react";
import { Form, Button, Container } from "react-bootstrap";
import useUser from "../services/user";
import useCreateAccount from '../services/create-account';
import {useNavigate} from 'react-router-dom';

const SignUP = () => {
  // const user = useUser();
  const navigate = useNavigate();
  const createUser = useCreateAccount();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    createUser({email, name, password});
    alert('회원가입이 완료되었습니다');
    navigate('/');
  };

  return (
    <Container className="mt-5">
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
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
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSubmit} >
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


/*


A                           B
**************************************
                  |
                  |
                  |
                  |
                  |
                  |         
                  |
                  |
                  |            
                  |
                  |          
                  |
***************************************

const loadProducts = useLoadProducts();

const [products, setProducts] = useState([]);

useEffect(() => {
  // 로딩, setProducts를 호출
}, []);

*/