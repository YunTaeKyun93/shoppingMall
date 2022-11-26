// const useReadCoupons = () => {
//   const localStorageName = "db";
//   return async () => {
//     const getDb = new Promise((resolve, reject) => {
//       const db = JSON.parse(window.localStorage.getItem(localStorageName));
//       resolve(db);
//     });

//     const getCoupons = await getDb;

//     // todo
//     return {
//       getCoupons: getCoupons.coupons
//     };
//   };
// };
import useLocalStorageName from "../local-storage-name";

const useReadCoupons = () => {
  const localStorageName = useLocalStorageName();

  return async () => {
    // 쿠폰을 읽고,
    // 1. DB를 가져온다.
    const db = JSON.parse(window.localStorage.getItem(localStorageName));

    // 2. Coupons를 가져온다.
    const { coupons } = db;
    //const coupons = db.coupons
    // 3. Coupons를 정렬한다.
    const sortCouponsByIssuedDateDesc = (a, b) =>
      b.issueDate.localeCompare(a.issueDate);
    coupons.sort(sortCouponsByIssuedDateDesc);

    coupons.forEach((currentCoupon) => { 
    
      currentCoupon.issueDate = new Date(currentCoupon.issueDate);
      currentCoupon.usedDate = new Date(currentCoupon.usedDate);
    });

    // JS Array: 두가지 방식으로 작동하는 함수들
    // , slice
    // 1. 원본을 변경하는 애들: push, pop, concat, splice, sort
    // 2. 원본을 변경 안 하는 애들: slice, split,
    // 3. 리턴을 해주니까: 헷갈릴 수 있음: myArr.push('asfd'); // ['1', '2', '3', 'asfd'] X // myArr.sort(sortFn) // 변경값을 리턴도 해줌

    // const sortCouponsByIssuedDateDesc = () => {
    //   return coupons.sort(
    //     (a, b) => b.issueDate.valueOf() - a.issueDate.valueOf()
    //   );
    // };
    //

    // 리턴!
    return coupons;
  };
};

export default useReadCoupons;

// Pagination: (페이지네이션)
// 1) 더보기
// 2) 1, 2, 3, 4, 5, 페이지
// 3) 무한 스크롤

// DB에서 coupons를 가져오고
// 정렬을 Page안에서
// => 실무에서 못 씀
// 1, 2, 3, 4 or 더 보기
// 최신순: 어떤 5개를 보여줄것인지?

// 정렬 기준, 페이지네이션(x)
