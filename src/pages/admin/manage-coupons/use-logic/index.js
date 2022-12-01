import { useState, useEffect } from "react";

import useReadCoupons from "../../../../services/read-coupons";
import useDeleteCoupons from "../../../../services/delete-coupons";
import useIsCouponUsed from "../../../../services/is-coupon-used";
import UsedCouponError from "../../../../errors/used-coupon";
const sortFn = (a, b) => {
  // return b.name.localeCompare(a.name);
  return new Date(b.issueDate).valueOf() - new Date(a.issueDate).valueOf();
};

const useLogic = () => {
  const readCoupons = useReadCoupons();
  const deleteCoupons = useDeleteCoupons();
  // const deleteCheckedCoupons = useDeleteCheckedCoupons();
  const [coupons, setCoupons] = useState(undefined);
  const [isCouponsChecked, setIsCouponsChecked] = useState({});

  const init = async () => {
    const coupons = await readCoupons();
    setCoupons(coupons);
  };

  useEffect(() => {
    init();
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

  // 1. 현재 체크된 쿠폰아이디를 들고온다(삭제버튼을 누른 시점 * 최종 *)
  // 2. 체크된 쿠폰아이디의 사용상태가 사용 전이면 삭제 안됨
  // 체크된 쿠폰아이디 중 사용상태가 사용 전인것이 하나라도 있으면 삭제과정을 중단하고 alert를 띄워줘야 한다.
  // 3. 체크된 쿠폰아이디의 사용상태가 사용 후면 삭제 됨 // 신경 쓸 필요가 없음.
  // 4. db 로드
  // 5. db 삭제
  // 6. db 저장

  const getSelectedCouponIds = () => {
    return Object.entries(isCouponsChecked)
      .filter(([_, value]) => value)
      .map(([key, _]) => key);
  };

  const deleteCheckedCoupons = async () => {
    try {
      const deleteTargetCouponIds = getSelectedCouponIds();
      await deleteCoupons(deleteTargetCouponIds);
      // window.location.reload();
      init(); // 2번 방법
    } catch (error) {
      // TODO 에러 처리가 필요한 경우 여기에서 처리할 것

      if (error instanceof UsedCouponError) {
        alert("사용된 쿠폰입니다");
        return;
      }
      throw error;
    }
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
    deleteCheckedCoupons
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

/*
1. 삭제한 것을 없애기(GOOD)

const deletedCouponIds = ???;
const isNotDeleted = (coupon) => !deletedCouponIds.has(coupon.id);
setCoupons(coupons.filter(isNotDeleted));

2. 다시 로딩하기(BEST)

const coupons = await readCoupons();
setCoupons(coupons);

3. 새로고침하기(NOT BAD)
window.location.reload();

*/
