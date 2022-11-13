import React from 'react';
import Coupon from '../../../components/coupon';
import AdminHeader from './../../../components/AdminHeader';
import useLogic from './use-logic';




const AdminCreateCouponPage = () => {
    const logic = useLogic();
    return <div>
        <AdminHeader />
        <Coupon
            logic={logic}
        />
        {/* //쿠폰이름, 지급포인트 액수  */}
    </div>;
};

export default AdminCreateCouponPage;
