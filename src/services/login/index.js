import useAuth from "../auth";
import UserNotFoundByEmailError from "../../errors/user-not-found-by-email";
import IncorrectPasswordError from "../../errors/incorrect-password";

const useLogin = () => {
  const auth = useAuth();

  return ({ email, password }) => {
    const loginAsAdmin = ({admin, enteredPassword}) => {
      if (admin.password !== enteredPassword) {
        throw new Error('비밀번호가 일치하지 않습니다');
      }

      auth.adminLogin(admin.id);
    };
  
    const loginAsUser = ({user, enteredPassword}) => {
      if (user.password !== enteredPassword) {
        throw new Error('비밀번호가 일치하지 않습니다');
      }

      auth.login(user.id);
    };
  
    // DB 불러오기
    const db = JSON.parse(window.localStorage.getItem("db"));
    const userAccount = db.users.find((user) => user.email === email);
    const adminAccount = db.admins.find((admin) => admin.email === email);
    // 로그인 가능 여부 확인
    // 일반 유저 와 관리자 계정 확인


    // 어드민 유저인가 확인
    if (adminAccount) {
      loginAsAdmin({admin: adminAccount, enteredPassword: password});
      return;
    }

    if (userAccount) {
      loginAsUser({user: userAccount, enteredPassword: password});
      return;
    }

    throw new UserNotFoundByEmailError(email);


    
    // if (adminAccount === undefined) {
    //   if (userLoggedIn == null) {
    //     throw new UserNotFoundByEmailError(email);
    //     // throw new Error('일치하는 회원이 없습니다.')
    //   }
    //   if (userLoggedIn.password !== password) {
    //     throw new IncorrectPasswordError({ password });
    //     // throw new Error('비밀번호가 일치 하지 않습니다.')
    //   }
    // }
    // // 가능한 경우, 유저 id를 local storage에 저장

    // if (adminAccount !== undefined) {
    //   auth.adminLogin(adminAccount.id);
    // } else {
    //   auth.login(userLoggedIn.id);
    // }
  };
};

export default useLogin;
