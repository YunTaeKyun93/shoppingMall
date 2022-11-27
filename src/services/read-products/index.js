import useLocalStorageName from "../local-storage-name";

const useReadProducts = () => {
  const localStorageName = useLocalStorageName();
  return async () => {
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    const products = db.products;

    // return products;
    // 첫 번째 방법(forEach사용)
    // {
    //   products.forEach((currentProduct) => {
    //     currentProduct.issueDate = new Date(currentProduct.issueDate);
    //   });

    //   return products;
    // }
    // nested collection(x)

    // 두 번째 방법(map사용)

    const issueDateMappedProducts = products.map((currentProduct) => {
      console.log('currentProduct',currentProduct)
      return {
        ...currentProduct,
        issueDate: new Date(currentProduct.issueDate)
      };
    });

    return issueDateMappedProducts;

    // const product = products.map((currentProduct)=>currentProduct.)
    // products.issueDate = new Date(products.issueDate )
    // return products;
  };
};

export default useReadProducts;
