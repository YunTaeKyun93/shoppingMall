import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReadItems from "../../../services/read-items";
const useLogic = () => {
  const navigate = useNavigate();
  const readItems = useReadItems();
  const [items, setItems] = useState();
  const init = async () => {
    const items = await readItems();
    setItems(items);
  };
  useEffect(() => {
    init();
  }, []);

  const goToItemDetailPage = (productId) => {
    navigate(`/product-detail/${productId}`);
  };
  return {
    items,
    isLoading: !items,
    goToItemDetailPage
  };
};
export default useLogic;
