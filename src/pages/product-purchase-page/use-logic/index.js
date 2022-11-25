import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReadProduct from "./../../../services/read-product/index";

const useLogic = () => {
  const { id } = useParams();
  const readProduct = useReadProduct();
  const [product, setProduct] = useState(null);

  const init = async () => {
    const product = await readProduct(id);
    setProduct(product);
  };

  useEffect(() => {
    init();
  }, []);


  return{
    product,
    isLoading:!product
  }
};
export default useLogic;
