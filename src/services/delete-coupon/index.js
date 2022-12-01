import useDeleteCoupons from '../delete-coupons';

const useDeleteCoupon = ()=>{
    const deleteCoupons = useDeleteCoupons();
    
    return async (couponId) => {
        await deleteCoupons([couponId]);
    };
    // const localStorageName = useLocalStorageName();

    // return async (couponId)=>{
       
    //     const db = JSON.parse(window.localStorage.getItem(localStorageName));
    //     const deleteTarget = db.coupons.filter((currentCoupon)=>currentCoupon.id == couponId);
    // }
};

export default useDeleteCoupon;