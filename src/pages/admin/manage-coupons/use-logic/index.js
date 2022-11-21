import { useState, useEffect } from "react";

import useReadCoupons from "../../../../services/read-coupons";
import useDeleteCoupons from "../../../../services/delete-coupons";
import useIsCouponUsed from "../../../../services/is-coupon-used";
import useCheckIsCouponNotDeleted from "../../../../services/check-is-coupon-not-deleted";
import useDeleteCheckedCoupons from "../../../../services/delete-checked-coupons";
const sortFn = (a, b) => {
  // return b.name.localeCompare(a.name);
  return new Date(b.issueDate).valueOf() - new Date(a.issueDate).valueOf();
};

const useLogic = () => {
  const readCoupons = useReadCoupons();
  const deleteCoupons = useDeleteCoupons();
  // const checkIsCouponNotDeleted = useCheckIsCouponNotDeleted();
  const deleteCheckedCoupons = useDeleteCheckedCoupons();
  const [coupons, setCoupons] = useState(undefined);
  const [isCouponsChecked, setIsCouponsChecked] = useState({});

  useEffect(() => {
    const impl = async () => {
      const coupons = await readCoupons();

      setCoupons(coupons);
    };

    impl();
  }, []);

  const isCouponChecked = (couponId) => {
    return !!isCouponsChecked[couponId];
    // const coupon = coupons.find((currentCoupon) => currentCoupon.id === couponId);
    // return !!coupon.isChecked;
  };

  const toggleIsCouponChecked = (couponId) => {
    setIsCouponsChecked({
      ...isCouponsChecked,
      [couponId]: !isCouponChecked(couponId)
    });
    // setCoupons(
    //   coupons.map(
    //     (currentCoupon) => {
    //       if (currentCoupon.id !== couponId) {
    //         return currentCoupon;
    //       }

    //       return {
    //         ...currentCoupon,
    //         isChecked: !isCouponChecked(couponId),
    //       };
    //     }
    //   )
    // );
  };



  // const deleteCheckedCoupons = async () => {
  //   // 체크한 모든 쿠폰이 아직 사용되기 전인지 확인할 것

  //   if (!window.confirm("정말로 삭제하시겠습니까?")) {
  //     return;
  //   }

  //   // 체크된 쿠폰 전부 가져오기
  //   const couponIdsToBeDeleted = Object.entries(isCouponsChecked)
  //     .map(([key, value]) => {
  //       if (!value) {
  //         return undefined;
  //       }

  //       return key;
  //     })
  //     .filter((a) => a != null);

  //   // 삭제하기
  //   await deleteCoupons(couponIdsToBeDeleted);
  // };

  return {
    coupons,
    isLoading: !coupons,
    isCouponChecked,
    toggleIsCouponChecked,
    deleteCheckedCoupons,
  };
};
export default useLogic;
// Array, Object

// Object: <Object> <Record> // 의미적인 것
// jack: Person(name, age, gender), apple: Fruit, thinkpad: Laptop // 오브젝트
// Record: Object를 Map처럼. 코드 더 짧음. 성능도 좋고. 함수형(불변성), 원본을 훼손하지 않고 새로운 객체를 만드는 것이 편함.
/*
const [isCouponsChecked, setIsCouponsChecked] = useState(new Map());

const toggleIsCouponChecked = (couponId) => {
  // isCouponsChecked를 복사
  const newIsCouponsChecked = new Map(isCouponsChecked);
  
  newIsCouponsChecked.set(couponId, !isCouponChecked(couponId));
};

const toggleIsCouponChecked = (couponId) => {
  // isCouponsChecked를 복사
  const newIsCouponsChecked = {
    ...isCouponsChecked,
    [couponId]: !isCouponChecked(couponId),
  };
  
  newIsCouponsChecked.set(couponId, !isCouponChecked(couponId));
};

// ImmutableJS(Set, Map을 불변성)

*/
