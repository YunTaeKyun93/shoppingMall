import useLocalStorageName from "../local-storage-name/index";
import useReadUser from "../read-user/index";

const useReadPurchaseHistoriesByUserId = () => {
  // const localStorageName = useLocalStorageName();
  const readUser = useReadUser();

  return async (userId) => {
  
    const user = await readUser(userId);
    const purchaseHistory = user.purchaseHistory;
    return purchaseHistory;
  };
};
export default useReadPurchaseHistoriesByUserId;