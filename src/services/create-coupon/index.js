import { v4 as uuid } from "uuid";
import useLocalStorageName from "../local-storage-name";
const useCreateCoupon = () => {
  const localStorageName = useLocalStorageName();

  return ({ name, pointAmount, issueDate, isUsed, usedDate,isCheckCoupon }) => {
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
  
    const serialNum = Math.random().toString(36).substring(2, 12);

    db.coupons.push({
      id: uuid(),
      name,
      pointAmount,
      issueDate,
      isUsed,
      usedDate,
      serialNum,
      isCheckCoupon,
    });

    window.localStorage.setItem(localStorageName, JSON.stringify(db));
  };
};

export default useCreateCoupon;
