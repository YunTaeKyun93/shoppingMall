import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductNotFoundByIdError from "../../../../errors/product-not-found-by-id";
import useReadProduct from "../../../../services/read-product";

const useLogic = () => {
  const { id } = useParams();
  const readProduct = useReadProduct()

  const [product, setProduct] = useState(undefined);

  const init = async () => {
    try{
      const product = await readProduct(id);
      setProduct(product);
    }catch(error){
      if(error instanceof ProductNotFoundByIdError){
        alert('해당하는 ID를 가진 상품이 없습니다.');
        return;
      }
    }
   
  };

  useEffect(() => {
    init();
  }, []);

  return {
    id,
    product,
    isLoading: !product,
  
  };
};
export default useLogic;
