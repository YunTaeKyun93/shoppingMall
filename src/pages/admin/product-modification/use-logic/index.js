import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReadProduct from "../../../../services/read-product";
import useModifyProduct from '../../../../services/modify-product';

const useLogic = () => {
  const { id } = useParams();
  // const readProducts = useReadProducts();
  const readProduct = useReadProduct();
  const modifyProduct = useModifyProduct(); // CRUD CREATE, READ, UPDATE, DELETE(DESTROY)
  // const [products, setProducts] = useState(undefined);
  const [product, setProduct] = useState(undefined);
  const [name, setName] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(null);
  // useEffect(() => {
  //   const impl = async () => {
  //     const products = await readProducts();
  //     setProducts(products.getProduts);
  //   };

  //   impl();
  // }, []);
  useEffect(() => {
    const impl = async () => {
      const product = await readProduct(id);
      setProduct(product);
    };

    impl();
  }, []);

  const changeValue = (value) => {
    console.log(value);
  };
  const updateValue = ({category,})=>{

  }

  const attachErrorHandler = (fn) => {
    const newFn = async (...args) => {
      try {
        await fn(...args);
      } catch (error) {
        console.error(error);
        alert('알 수 없는 에러가 발생했습니다.');
      }
    };

    return newFn;
  };

  const updateName = attachErrorHandler(async () => {
    await modifyProduct(id, {name});
    alert('수정되었습니다');
  });

  const updateImageUrl = attachErrorHandler(async () => {
    await modifyProduct(id, {imageUrl});
    alert('수정되었습니다');
  });

  const updatePrice = attachErrorHandler(async () => {
    await modifyProduct(id, {price});
    alert('수정되었습니다');
  });

  const updateDescription = attachErrorHandler(async () => {
    await modifyProduct(id, {description});
    alert('수정되었습니다');
  });

  
  return {
    id,
    // products,
    // currentProduct: products != null ? products.find((currentProduct) => currentProduct.id === id) : undefined,
    product,
    isLoading: !product,
    name,
    setName,
    imageUrl,
    setImageUrl,
    price,
    setPrice,
    description,
    setDescription,
    changeValue,
    updateValue,

    updateName,
    updateImageUrl,
    updatePrice,
    updateDescription,
  };
};

export default useLogic;
