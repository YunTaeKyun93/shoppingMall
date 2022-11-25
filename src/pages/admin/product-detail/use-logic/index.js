import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../services/auth";
import useReadProduct from "../../../../services/read-product";
const useLogic = () => {
  const { id } = useParams();
  const readProduct = useReadProduct()
  const auth = useAuth();
  const [product, setProduct] = useState(undefined);

  const init = async () => {
    const product = await readProduct(id);
    setProduct(product);
  };

  useEffect(() => {
    init();
  }, []);

  return {
    id,
    product,
    isLoading: !product,
    auth
  };
};
export default useLogic;
