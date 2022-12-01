import useAuth from "../auth";
import UserNotFoundByEmailError from "../../errors/user-not-found-by-email";
import IncorrectPasswordError from "../../errors/incorrect-password";

const useLogin = () => {
  const auth = useAuth();

  return ({ email, password }) => {
    const loginAsAdmin = ({ admin, enteredPassword }) => {
      if (admin.password !== enteredPassword) {
        throw new Error("비밀번호가 일치하지 않습니다");
      }
      auth.adminLogin(admin.id);
    };

    const loginAsUser = ({ user, enteredPassword }) => {
      if (user.password !== enteredPassword) {
        throw new Error("비밀번호가 일치하지 않습니다");
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
      console.log("admin계정");
      loginAsAdmin({ admin: adminAccount, enteredPassword: password });
      return;
    }

    if (userAccount) {
      console.log("user계정");
      loginAsUser({ user: userAccount, enteredPassword: password });
      return;
    }

    throw new UserNotFoundByEmailError(email);
  };
};

export default useLogin;
