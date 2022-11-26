import useLocalStorageName from "../local-storage-name";
//t1fu91czzz
const useUseCoupon = () => {
  const localStorageName = useLocalStorageName();
  return async (couponSerialNumber, id) => {
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    const currentCoupon = db.coupons.find(
      (coupon) => coupon.serialNum == couponSerialNumber
    );
    const user = db.users.find((user) => user.id == id);


    const pointAmount = currentCoupon.pointAmount * 1000;

    if (currentCoupon.usageStatus) {
      throw new Error("사용된 쿠폰입니다!!");
    }

    user.point += pointAmount;
    currentCoupon.usageStatus = true;
    window.localStorage.setItem(localStorageName, JSON.stringify(db));

    // 시리얼 넘버랑 맞는 쿠폰을 찾는다. x
    // 유저의 point에 추가를 직접 해줌? x
    // db를 불러와서 coupons 반복문을 돌려서 파라미터로 오는 시리얼넘버에 매칭되는 해당 쿠폰을찾음x
    // 해당 쿠폰의 pointAmount값을 유저의 포인트 에 추가
    // useAuth().isLoggedIn === false => throw new Error('로그인이 필요합니다'); x
    // 로그인 된 유저의 useAccount를
    // useAuth().userId => db.users에서 find를 해야 함. x
    // userAccount에서 point = pointAmount를 대입하면
    // 그 해당 쿠폰의 포인트를 유저의 포인트에 추가 ??
    // 조건문으로 사용여부가 false인지 true 인지 확인절차
    // 쿠폰 사용 여부 교체
    // db 저장
  };
};

// const useReadCouponBySerialNumber
// coupon.amount

export default useUseCoupon;
