import usedIsCouponUsed from "../is-coupon-used";
const useCheckIsCouponNotDeleted = () => {
  const isCouponUsed = usedIsCouponUsed();
  return async (coupon) => {
    if (!isCouponUsed(coupon)) {
      throw new Error("쿠폰이 이미 사용되었습니다.");
    }
  };
};
export default useCheckIsCouponNotDeleted;
