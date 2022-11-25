import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useDeleteCoupon from "../../../../services/delete-coupon";
import useReadCoupon from "../../../../services/read-coupon";
const useLogic = () => {
  const { id } = useParams();
  const readCoupon = useReadCoupon();
  const deleteCoupon = useDeleteCoupon();
  const [coupon, setCoupon] = useState(undefined);
  const init = async () => {
    const coupon = await readCoupon(id);
    setCoupon(coupon);
  };

  useEffect(() => {
  

    init();
  }, []);
  const deleteCurrentCoupon = async () => {
    try {
      await deleteCoupon(id);
      // window.location.reload();
    } catch (error) {
      // TODO 에러 처리가 필요한 경우 여기에서 처리할 것

      console.error(error);
      alert("알 수 없는 에러가 발생했습니다.");
      throw error;
    }
  };

  return {
    id,
    coupon,
    isLoading: !coupon,

     deleteCurrentCoupon
  };
};
export default useLogic;
