import { useState,useEffect } from "react";
import useReadPurchaseHistoriesByUserId from './../../../services/read-purchase-history';
import useAuth from './../../../services/auth/index';

const useLogic = () => {
  const auth = useAuth();
  const userId = auth.userId;
  const readPurchaseHistoryByUserId = useReadPurchaseHistoriesByUserId();
  const [purchaseHistory,setPurchaseHistory] = useState(null);
  const init=async()=>{
    const purchaseHistory = await readPurchaseHistoryByUserId(userId);
    setPurchaseHistory(purchaseHistory);
  }
  useEffect(()=>{
    init();
  },[])

  return{
    purchaseHistory,
    isLoading : !purchaseHistory,

  }
};
export default useLogic;
