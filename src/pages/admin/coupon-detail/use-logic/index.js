import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useDeleteCoupon from "../../../../services/delete-coupon";
import useReadCoupon from "../../../../services/read-coupon";
import UsedCouponError from '../../../../errors/used-coupon';

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
      
    } catch (error) {
      if(error instanceof UsedCouponError){
        alert('사용된 쿠폰입니다')
        return
      }
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
