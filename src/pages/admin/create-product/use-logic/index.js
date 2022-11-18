import { useState } from "react";
import useCreateProduct from "../../../../services/create-product";
const useLogic = ({ fileInput }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [price, setPrice] = useState("");
  const createProduct = useCreateProduct();

  const createIssueDate = () => {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    const issueDate = year + "-" + month + "-" + day;
    return issueDate;
  };
  // const handleBtnClick = (e) => {
  //   fileInput.current.click();
  // };
  // const handleChange = (e) => {
  //   setImageUrl(e.target.files[0]);
  //   console.log(imageUrl);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    createProduct({
      name,
      description,
      imageUrl,
      price: Number(price),
      issueDate: createIssueDate()
    });
    alert('상품이 등록 되었습니다.');
  };

  return {
    name,
    setName,
    description,
    setDescription,
    imageUrl,
    setImageUrl,
    price,
    setPrice,
    onSubmit,
    // handleBtnClick,
    // handleChange
  };
};
export default useLogic;
