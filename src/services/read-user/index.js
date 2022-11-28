import useLocalStorageName from "../local-storage-name";

const useReadUser = () => {
  const localStorageName = useLocalStorageName();
  console.log(111);
  return async (id) => {
    console.log(2222);
    const db = JSON.parse(window.localStorage.getItem(localStorageName));

    console.log("db", db);
    const result = db.users.find((currentUser) => currentUser.id === id);
    if (result == null) {
      throw new Error("유저를 id로 찾을 수 없습니다.");
    }

    return result;
  };
};

export default useReadUser;
