import { useState, useEffect } from "react";
import useReadProducts from "../../../services/read-products";
const useLogic = () => {
  const readProducts = useReadProducts();
  const [products, setProducts] = useState(undefined);
  const init = async () => {
    const products = await readProducts();
    setProducts(products);
  };
  useEffect(() => {
    init();
  }, []);

  return {
    products,
    isLoading : !products
  };
};
export default useLogic;
