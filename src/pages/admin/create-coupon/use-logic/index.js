import { useState } from 'react';
import useCreateCoupon from '../../../../services/create-coupon';
const useLogic = () => {
    const [name, setName] = useState(null);
    const [pointAmount, setPointAmount] = useState("");
    const createCoupon = useCreateCoupon();

    const onSubmit = (event) => {
        event.preventDefault();
        createCoupon({ name, pointAmount });
        alert('쿠폰이 발행 되었습니다.');
        console.log('name',name);
        console.log('pointAmount',pointAmount)
    }


    return {
        name,
        setName,
        pointAmount,
        setPointAmount,
        onSubmit
    }
}

export default useLogic;