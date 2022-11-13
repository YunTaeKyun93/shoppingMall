import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCreateCoupon from '../../../../services/create-coupon';
const useLogic = () => {
    const navigate = useNavigate();
    const createCoupon = useCreateCoupon();
    const [name, setName] = useState(null);
    const [pointAmount, setPointAmount] = useState("");
    const [usageStatus, setUsageSatus] = useState(false);
    const [usedDate, setUsedDate] = useState(null);
    let serialNum = 0;

    const createIssueDate = () => {
        const today = new Date()
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        const issueDate = year + "-" + month + "-" + day;
        return issueDate;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        serialNum += 1;
        createCoupon({ name, pointAmount: Number(pointAmount), issueDate: createIssueDate(), usageStatus, usedDate, serialNum });
        alert('쿠폰이 발행 되었습니다.');
        navigate('/admin/manage-coupons');
    }


    return {
        name,
        setName,
        pointAmount,
        setPointAmount,
        onSubmit,

    }
}

export default useLogic;
