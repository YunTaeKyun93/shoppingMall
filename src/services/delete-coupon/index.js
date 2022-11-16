const useDeleteCoupon = ()=>{
    const db = JSON.parse(window.localStorage.getItem("db"));
    const coupons = db.coupons;

    const updateCouponList =  coupons.filter((coupon)=>coupon == 1 )
}
export default useDeleteCoupon;