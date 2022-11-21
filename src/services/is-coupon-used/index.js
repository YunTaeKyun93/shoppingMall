const useIsCouponUsed = () => {
    return async (coupon) => {
        console.log("nn",coupon.usageStatus);

        return coupon.usageStatus;
    }

    };
export default useIsCouponUsed;