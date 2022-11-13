
const storageName = 'db'
const useCreateCoupon = () => {
    return ({ name, pointAmount }) => {
        const db = JSON.parse(window.localStorage.getItem(storageName));

        db.coupons.push({
            name,
            pointAmount,
        })
        window.localStorage.setItem(storageName, JSON.stringify(db))
    }
}

export default useCreateCoupon;