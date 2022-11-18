const useReadCoupons = () => {
  const localStorageName = "db";
  return async () => {
    const getDb = new Promise((resolve, reject) => {
      const db = JSON.parse(window.localStorage.getItem(localStorageName));
      resolve(db);
    });

    const getCoupons = await getDb;

    // todo
    return {
        getCoupons: getCoupons.coupons
    };
  };
};

export default useReadCoupons;
