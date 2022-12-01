class UsedCoupon extends Error {
  constructor() {
    super(`사용된 쿠폰 입니다.`);
  }
}
export default UsedCoupon;
