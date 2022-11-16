import { v4 as uuid } from "uuid";
const storageName = "db";
const useCreateCoupon = () => {
  return ({ name, pointAmount, issueDate, usageStatus, usedDate,isCheckCoupon }) => {
    const db = JSON.parse(window.localStorage.getItem(storageName));
    const serialNum = Math.random().toString(36).substring(2, 12);

    db.coupons.push({
      id: uuid(),
      name,
      pointAmount,
      issueDate,
      usageStatus,
      usedDate,
      serialNum,
      isCheckCoupon,
    });
    window.localStorage.setItem(storageName, JSON.stringify(db));
  };
};

export default useCreateCoupon;
