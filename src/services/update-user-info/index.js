import useReadUser from "./../read-user/index";
import useLocalStorageName from "./../local-storage-name/index";
const useUpdateUserInfo = () => {
  const readUser = useReadUser();
  const localStorageName = useLocalStorageName();
  return async (id, payload) => {
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    const user = await readUser(id);

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
