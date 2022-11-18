const useReadProducts = () => {
    const localStorageName = "db";
    return async () => {
      const getDb = new Promise((resolve, reject) => {
        const db = JSON.parse(window.localStorage.getItem(localStorageName));
        resolve(db);
      });
  
      const getProduts = await getDb;
  

      return {
        getProduts: getProduts.products
      };
    };
  };
  
  export default useReadProducts;
  