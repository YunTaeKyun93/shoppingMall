import useDeleteCoupon from "../../../../services/delete-coupon";

const useLogic = () => {

    const deleteCouponService = useDeleteCoupon();
  const deleteCoupon = () => {
    try{
        deleteCouponService()
    }
    catch(error){

    }
  };

  return{
    deleteCoupon,
  }
};
export default useLogic;
