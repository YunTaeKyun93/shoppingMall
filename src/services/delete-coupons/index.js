import useReadCoupon from "../read-coupon";
import useLocalStorageName from "../local-storage-name";

const useDeleteCoupons = () => {
  const readCoupon = useReadCoupon();
  const localStorageName = useLocalStorageName();

  return async (couponIds) => {
    const deleteTargetCoupons = await Promise.all(couponIds.map(readCoupon));
    deleteTargetCoupons.forEach((currentCoupon) => {
      if (currentCoupon.isUsed) {
        throw new Error("사용된 쿠폰이 존재합니다.");
      }
    });

    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    const deleteTargetIdSet = new Set(couponIds);

    // console.log("deleteTargetCoupons", deleteTargetCoupons);

    // const isNotDeleteTarget = (coupon) => !deleteTargetIdSet.has(coupon.id);
    // const afterDelete = db.coupons.filter(isNotDeleteTarget);
    const afterDelete = db.coupons.filter((currentCoupon) => {
      return !deleteTargetIdSet.has(currentCoupon.id);
    });
    console.log("afterDelete", afterDelete);

    // const newDb = {
    //   ...db,
    //   coupons: afterDelete
    // };
    db.coupons = afterDelete;

    // console.log("newDb", newDb);
    window.localStorage.setItem(localStorageName, JSON.stringify(db));
  };
};

// 1. localStorage가 변경되었으면 좋겠다.

// 2. 조건: 대신, 이 중 사용된 쿠폰이 하나라도 있으면 중간에 예외를 던져야 한다.

// Section 1: 조건: 대신,
// 이 중 사용된 쿠폰이 하나라도 있으면 중간에 예외를 던져야 한다.

// const deleteTargetCoupons = await Promise.all(couponIds.map(readCoupon));
// console.log("deleteTargetCoupons", deleteTargetCoupons);
// deleteTargetCoupons.forEach((currentCoupon) => {
//   if (currentCoupon.usageStatus) {
//     throw new Error("사용된 쿠폰이 있습니다."); // TODO 나중에 제대로 된 에러 객체로 바꿀 것
//   }
// });
// const db = JSON.parse(window.localStorage.getItem(localStorageName));


// const deleteTargetIdSet = new Set(couponIds);
// console.log("deleteTargetIdSet", deleteTargetIdSet);
// const isNotDeleteTarget = (coupon) => !deleteTargetIdSet.has(coupon.id);
// console.log("isNotDeleteTarget", isNotDeleteTarget);
// const afterDelete = db.coupons.filter(isNotDeleteTarget);
// console.log("afterDelete", afterDelete);

// [1, 2, 3, 4, 5].filter(below3)
// const isBelow3 = (number) => number < 3

// forEach(리턴을 원하지 않음)
// map(네가 리턴되는 리스트에 들어가고싶은 값을 네기 리턴을 해)
// filter(블리언을 리턴해. true면(truthy) 내가 리턴하는 리스트에 남겨두고, false(falsy)면 내가 리턴하는 리스트에서 빼버릴게)

// DB 생성
//     const newDb = {
//       ...db,
//       coupons: afterDelete
//     };

//     // DB 업데이트
//     window.localStorage.setItem(localStorageName, newDb);
//   };
// };
// todo
export default useDeleteCoupons;
// // couponIds 대신 coupons를 받으면 해당 작업 필요없음.
// const coupons = await Promise.all(
//   couponsIds.map(readCoupon)
// );

// // 쿠폰이 사용이 전부 안 되어있는지 체크
// coupons.forEach(checkIsCouponNotUsed);

// // DB 로드
// const db = JSON.parse(window.localStorage.getItem(localStorageName));

// // DB 삭제
// const deleteTargetCouponIdSet = new Set(couponIds);
// const afterDelete = db.coupons.filter(
//   (currentCoupon) => {
//     return !deleteTargetCouponIdSet.has(currentCoupon.id);
//   }
// );

// // DB 저장
// db.coupons = afterDelete;
// window.localStorage.setItem(localStorageName, JSON.stringify(db));

// // 2. 체크된 쿠폰아이디의 사용상태가 사용 후이면 삭제 안됨
// // 체크된 쿠폰아이디 중 사용상태가 사용 후인것이 하나라도 있으면 삭제과정을 중단하고 alert를 띄워줘야 한다.
// // 3. 체크된 쿠폰아이디의 사용상 태가 사용 전이면 삭제 됨 // 신경 쓸 필요가 없음.
// // 4. db 로드
// // 5. db 삭제
// // 6. db 저장
//   };
// };

// const useDeleteCoupons = () => {

//     return async (couponIds/* couponsIds 대신 그냥 coupons를 받아도 됨. */) => {

//         // 쿠폰 삭제 여부 확인
//         coupons.forEach(checkIsCouponNotUsed);

//         // 삭제 진행(DB 로드, 삭제, DB 저장) TODO
//     };
// };

// let promise1, promise2, promise3;

// {
//   const promiseResult1 = await promise1;
//   const promiseResult2 = await promise2;
//   const promiseResult3 = await promise3;
// }

// {
//   const [promiseResult1, promiseResult2, promiseResult3] = await Promise.all([promise1, promise2, promise3]);
// }

// {
//   const result = await fetchData();
// }

// {
//   const resultPromise = fetchData();
//   const result = await resultPromise;
// }

// {
//   const pr1 = await gpr1();
//   const pr2 = await gpr2();
//   const pr3 = await gpr3();
// }

// {
//   const p1 = gp1();
//   const p2 = gp2();
//   const p3 = gp3();

//   const pr1 = await p1;
//   const pr2 = await p2;
//   const pr3 = await p3;
// }

// printDbInfo = () => {
//   const db = getDb(); // () => (DB)
//   console.log(db);
// };

// const getDb = async () => {
//   return window.localStorage.getItem('db');
// }

// // *******************************************

// printDbInfo = async () => {
//   const db = await getDb(); // () => (Promise<DB>)
//   console.log(db); // Promise<...>
//   // number, number[]
//   // 1, [1, 2, 3]
// };

// const getDb = async () => {
//   const result = await axios('http://localhost:8000/db-info');
//   return result;
// }

// Read: return window.localStorage.getItem(...);

// Update, Delete, Create: window.localStorage.setItem(...);
