import UseLocalStorageName from "./../local-storage-name/index";
import UseAuth from "../auth";
const readItems = () => {
  const auth = UseAuth();
  const localStorageName = UseLocalStorageName();
  const userId = auth.loggedInUserId;
  return async () => {
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    const user = db.users.find((user) => user.id === userId);
    const items = user.items;
    return items;
  };
};
export default readItems;
