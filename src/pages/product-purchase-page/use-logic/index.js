import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReadProduct from "./../../../services/read-product/index";
import useAuth from "../../../services/auth";
import useReadUser from "./../../../services/read-user/index";
import useBuyProduct from "../../../services/buy-product";
const useLogic = () => {
  const { id } = useParams();
  const readProduct = useReadProduct();
  const readUser = useReadUser();
  const buyProduct = useBuyProduct();
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const auth = useAuth();
  const userId = auth.loggedInUserId;
  const init = async () => {
    const product = await readProduct(id);
    const user = await readUser(userId);
    setProduct(product);
    setUser(user);
  };

  const onSubmit = () => {
     buyProduct(product.id)
  };
  useEffect(() => {
    init();
  }, []);

  return {
    product,
    isLoading: !product,
    user,
    onSubmit
  };
};
export default useLogic;
