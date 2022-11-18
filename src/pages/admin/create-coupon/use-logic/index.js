import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCreateCoupon from "../../../../services/create-coupon";
const useLogic = () => {
  const navigate = useNavigate();
  const createCoupon = useCreateCoupon();
  const [name, setName] = useState(null);
  const [pointAmount, setPointAmount] = useState("");
  const [usageStatus, setUsageSatus] = useState(false);
  const [usedDate, setUsedDate] = useState(null);
  const [isCheckCoupon, setIsCheckCoupon] = useState(false);

  const createIssueDate = () => {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    const issueDate = year + "-" + month + "-" + day;
    return issueDate;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createCoupon({
      name,
      pointAmount: Number(pointAmount),
      issueDate: createIssueDate(),
      usageStatus,
      usedDate
    });
    alert("쿠폰이 발행 되었습니다.");
    navigate("/admin/manage-coupons");
  };

  return {
    name,
    setName,
    pointAmount,
    setPointAmount,
    onSubmit,
    isCheckCoupon
  };
};

export default useLogic;
