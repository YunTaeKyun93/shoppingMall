import useAuth from "../auth";
import UserNotFoundByEmailError from "../../errors/user-not-found-by-email";
import IncorrectPasswordError from "../../errors/incorrect-password";

const useLogin = () => {
  const auth = useAuth();

  return ({ email, password }) => {
    // DB 불러오기
    const db = JSON.parse(window.localStorage.getItem("db"));
    const userLoggedIn = db.users.find((user) => user.email === email);
    const adminAccount = db.admins.find(admin=> admin.email === email);
    // 로그인 가능 여부 확인
    //  일반 유저 와 관리자 계정 확인
  
    if(adminAccount !== null){
      console.log('admin')
    }

    if(userLoggedIn == null){
      throw new UserNotFoundByEmailError(email);
        // throw new Error('일치하는 회원이 없습니다.')
    }
    if (userLoggedIn.password !== password) {
      throw new IncorrectPasswordError({password});
        // throw new Error('비밀번호가 일치 하지 않습니다.')
    }
    
    // 가능한 경우, 유저 id를 local storage에 저장
    auth.login(userLoggedIn.id);
  };
};

export default useLogin;
