import { v4 as uuid } from 'uuid';
const storageName = 'db'
const useCreateCoupon = () => {
    return ({ name, pointAmount, issueDate,usageStatus,usedDate, }) => {
        const db = JSON.parse(window.localStorage.getItem(storageName));
        
        db.coupons.push({
            id: uuid(),
            name,
            pointAmount,
            issueDate,
            usageStatus,
            usedDate,
            // serialNum,
        })
        window.localStorage.setItem(storageName, JSON.stringify(db))
    }
}

export default useCreateCoupon;