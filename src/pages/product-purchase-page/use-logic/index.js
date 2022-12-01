import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReadProduct from "./../../../services/read-product/index";
import useAuth from "../../../services/auth";
import useReadUser from "./../../../services/read-user/index";
import useBuyProduct from "../../../services/buy-product";
import InsufficientBalance from '../../../errors/insufficient-balance';
const useLogic = () => {
  const { id } = useParams();
  const readProduct = useReadProduct();
  const readUser = useReadUser();
  const buyProduct = useBuyProduct();
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const auth = useAuth();
  const userId = auth.userId;
  const init = async () => {
    const product = await readProduct(id);
    const user = await readUser(userId);
    setProduct(product);
    setUser(user);
  };
  useEffect(() => {
    init();
  }, []);

  
  const onSubmit = () => {
    try{
      buyProduct(product.id);
      alert('상품이 구매되었습니다.');
      init();
    }catch(error){
      if(error instanceof InsufficientBalance){
        alert('잔액이 부족합니다.');
        return;
      }
    }

  };


  return {
    product,
    isLoading: !product,
    user,
    onSubmit
  };
};
export default useLogic;