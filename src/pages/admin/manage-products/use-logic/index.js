import { useState, useEffect } from "react";
import useReadProducts from "../../../../services/read-products";

const useLogic = () => {
  const readProducts = useReadProducts();
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const impl = async () => {
      const products = await readProducts();
      setProducts(products.getProduts);
    };

    impl();
  }, []);


  return {
    products,
    isLoading: !products
  };
};
export default useLogic;
