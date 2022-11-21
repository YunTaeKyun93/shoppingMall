import useCheckIsCouponNotDeleted from "../check-is-coupon-not-deleted";
import useLocalStorageName from "../local-storage-name";

const useDeleteCheckedCoupons = () => {
  const checkIsCouponNotDeleted = useCheckIsCouponNotDeleted();
  const localStorageName = useLocalStorageName();

  return async (coupons) => {
    // 쿠폰 삭제 여부 확인
    console.log('useDeleteCheckedCoupons',coupons)
    coupons.forEach(checkIsCouponNotDeleted);
  
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    db.coupons.map(coupon=>{
        console.log(coupon)
    })
    
    // window.localStorage.removeItem(JSON.stringify())


    // 삭제 진행(DB 로드, 삭제, DB 저장) TODO
  };
};
export default useDeleteCheckedCoupons;
