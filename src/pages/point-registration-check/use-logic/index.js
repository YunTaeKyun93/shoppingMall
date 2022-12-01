import { useState, useEffect } from "react";
import useReadUser from "../../../services/read-user";
import useReadCoupons from "./../../../services/read-coupons/index";
import useUseCoupon from "../../../services/use-coupon";
import useAuth from "../../../services/auth";
import UsedCouponError from '../../../errors/used-coupon';
const useLogic = () => {
  const auth = useAuth();
  const id = auth.userId;
  const [user, setUser] = useState(null);
  const [coupons, setCoupons] = useState(null);
  const [serialNumber, setSerialNumber] = useState("");
  const readUser = useReadUser();
  const readCoupons = useReadCoupons();
  const registrationCoupon = useUseCoupon();

  const init = async () => {
    const user = await readUser(id);
    const coupons = await readCoupons();
    setUser(user);
    setCoupons(coupons);
  };
  console.log(user)
  useEffect(() => {
    init();
  }, []);

  const onSubmit = () => {
    try{
      registrationCoupon(serialNumber, id);
      init();
      
    }catch(error){
      if(error instanceof UsedCouponError){
        alert('사용된 쿠폰입니다')
        return
      }
    }
   
  };

  return {
    user,
    isLoading: !user,
    coupons,
    serialNumber,
    setSerialNumber,
    onSubmit
  };
};
export default useLogic;
