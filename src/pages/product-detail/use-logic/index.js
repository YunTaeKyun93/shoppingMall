import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../services/auth";
import useReadProduct from "../../../services/read-product";
const useLogic = () => {
  const { id } = useParams();
  const auth = useAuth();
  const readProduct = useReadProduct()
  const [product, setProduct] = useState(undefined);
  const navigate = useNavigate();

  const init = async () => {
    const product = await readProduct(id);
    setProduct(product);
  };
 
  useEffect(() => {
    init();
  }, []);
  const goToPurcasePage  = ()=>{
    if(auth.isLoggedIn){
      navigate(`/product-purchase/${id}`)
    }
    if(!auth.isLoggedIn){
      navigate(`/sign-in`)
    }
  }
  return {
    id,
    product,
    isLoading: !product,
    goToPurcasePage
    
  };
};
export default useLogic;
