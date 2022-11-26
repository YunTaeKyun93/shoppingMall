import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useReadUser from "../../../services/read-user";
import useReadCoupons from "./../../../services/read-coupons/index";
import useUseCoupon from "../../../services/use-coupon";
import useAuth from "../../../services/auth";
const useLogic = () => {
  const auth = useAuth();
  const id = auth.userId;
  const [user, setUser] = useState(null);
  const [coupons, setCoupons] = useState(null);
  const [coupon, setCoupon] = useState(null);
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
  useEffect(() => {
    init();
  }, []);

  const onSubmit = () => {
    registrationCoupon(serialNumber, id);
    init();
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
