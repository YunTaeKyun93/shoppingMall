import { v4 as uuid } from "uuid";
import useLocalStorageName from "../local-storage-name";

const useCreateAccount = () => {
  const storageName = useLocalStorageName();
  return async ({ email, name, password }) => {
    // 로컬 스토리지 불러오기
    const db = JSON.parse(window.localStorage.getItem(storageName));

    // 유저 추가하기
    db.users.push({
      id: uuid(),
      email,
      name,
      password,
      point: 0
    });

    // 로컬 스토리지 반영하기
    window.localStorage.setItem(storageName, JSON.stringify(db));
  };
};

export default useCreateAccount;
