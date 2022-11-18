import { useState, useEffect } from "react";

import useReadCoupons from "../../../../services/read-coupons";
import useDeleteCoupons from "../../../../services/delete-coupons";
// import useSortListByNameDesc from "../../../../services/sort-list-by-name-desc";
const sortFn = (a, b) => {
  // return b.name.localeCompare(a.name);
  return new Date(b.issueDate).valueOf() - new Date(a.issueDate).valueOf();
};

const useLogic = () => {
  const readCoupons = useReadCoupons();
  const deleteCoupons = useDeleteCoupons();
  // const sortListByNameDesc = useSortListByNameDesc();
  const [coupons, setCoupons] = useState(undefined);
  const [isCouponsChecked, setIsCouponsChecked] = useState({});

  useEffect(() => {
    const impl = async () => {
      const coupons = await readCoupons();
      // coupons.getCoupons.sortListByNameDesc();
      // coupons.getCoupons.sortFn();
      setCoupons(coupons.getCoupons);
    };

    impl();
  }, []);

  const isCouponChecked = (couponId) => {
    return !!isCouponsChecked[couponId];
    // const coupon = coupons.find((currentCoupon) => currentCoupon.id === couponId);
    // return !!coupon.isChecked;
  };

  const toggleIsCouponChecked = (couponId) => {
    // console.log(isCouponChecked);
    setIsCouponsChecked({
      ...isCouponChecked,
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

  const deleteCheckedCoupons = async () => {
    // 체크한 모든 쿠폰이 아직 사용되기 전인지 확인할 것

    if (!window.confirm("정말로 삭제하시겠습니까?")) {
      return;
    }

    // 체크된 쿠폰 전부 가져오기
    const couponIdsToBeDeleted = Object.entries(isCouponsChecked)
      .map(([key, value]) => {
        if (!value) {
          return undefined;
        }

        return key;
      })
      .filter((a) => a != null);

    // 삭제하기
    await deleteCoupons(couponIdsToBeDeleted);
  };

  return {
    coupons,
    isLoading: !coupons,
    isCouponChecked,
    toggleIsCouponChecked,
    deleteCheckedCoupons
  };
};
export default useLogic;
