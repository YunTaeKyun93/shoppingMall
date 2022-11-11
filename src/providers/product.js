import { useState } from "react";
import ProductContext from './../contexts/product';
const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({
    name: null,
    price: 0,
    registrationDate: null,
    url: null,
    productDescription: null
  });
  return(
    <ProductContext.Provider>{children}</ProductContext.Provider>
  )
};

export default ProductProvider;
