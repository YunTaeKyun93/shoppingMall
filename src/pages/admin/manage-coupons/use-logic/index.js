import { useState } from "react";
const useLogic = ({ coupons }) => {
  const [isChecked, setIsChecked] = useState(false);
  const sortCuponList = () => {
    coupons.sort((a, b) => b.valueOf() - a.valueOf());
  };
console.log(isChecked);

  console.log(isChecked)
  const checkCoupon = () => {

  };
  return {
    sortCuponList,
    isChecked,
    setIsChecked
  };
};
export default useLogic;
