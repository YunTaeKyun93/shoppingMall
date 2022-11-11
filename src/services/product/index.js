import { useContext } from "react";
import ProductContext from "../../contexts/product";

const useProduct = () => {
  const productValue = useContext(ProductContext);

  return productValue;
};

export default useProduct;
