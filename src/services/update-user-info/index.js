import useReadUser from "./../read-user/index";
import useLocalStorageName from "./../local-storage-name/index";
const useUpdateUserInfo = () => {
  const readUser = useReadUser();
  const localStorageName = useLocalStorageName();
  return async (id, payload) => {
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    const user = await readUser(id);
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

    // if(!payload.email.test(regExp)!= null){
    if (!regExp.test(payload.email)) {
      throw new Error("이메일 형식을 지켜주세요");
    }
    const duplicateId = db.users.find((user) => user.email === payload.email);
    if (duplicateId) {
      throw new Error("중복된 아이디가 있습니다");
    }

    if ("email" in payload) {
      user.email = payload.email;
    }
    if ("password" in payload) {
      user.password = payload.password;
    }

    window.localStorage.setItem(
      localStorageName,
      JSON.stringify({
        ...db,
        users: db.users.map((currentUser) => {
          if (currentUser.id !== id) {
            return currentUser;
          }
          return user;
        })
      })
    );
  };
};
export default useUpdateUserInfo;
