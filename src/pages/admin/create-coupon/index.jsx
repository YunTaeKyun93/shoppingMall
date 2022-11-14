import React from "react";
import CreateCoupon from "../../../components/createCoupon";
import AdminHeader from "./../../../components/AdminHeader";
import useLogic from "./use-logic";

const AdminCreateCouponPage = () => {
  const logic = useLogic();
  return (
    <div>
      <AdminHeader />
      <CreateCoupon logic={logic} />

      {/* 
        쿠폰이름, O
        지급포인트 액수(form select를 사용 사용시 퍼센티지나 *1000을 해서 사용), O
        쿠폰번호(uuid 사용), O
        사용여부(boolean ?? or checkBox 사용하면 될듯) X
        발급일자(onSubmit을 클릭 할 시 사용하면 될듯?), O
        사용일자(사용여부 날짜사용 하면 될듯?), X
         */}
    </div>
  );
};

export default AdminCreateCouponPage;
