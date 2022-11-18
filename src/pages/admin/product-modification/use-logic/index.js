import { useState, useEffect } from "react";
import useReadProducts from "../../../../services/read-products";
import useModifyProduct from '../../../../services/modify-product';

const useLogic = () => {
  const readProducts = useReadProducts();
  const modifyProduct = useModifyProduct();
  const [products, setProducts] = useState(undefined);
  const [name, setName] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(null);
  useEffect(() => {
    const impl = async () => {
      const products = await readProducts();
      setProducts(products.getProduts);
    };

    impl();
  }, []);

  const changeValue = (value) => {
    console.log(value);
  };
  const updateValue = ({category,})=>{

  }
  return {
    products,
    isLoading: !products,
    name,
    setName,
    imageUrl,
    setImageUrl,
    price,
    setPrice,
    description,
    setDescription,
    changeValue,
    updateValue
  };
};

export default useLogic;
