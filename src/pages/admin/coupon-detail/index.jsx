import { useParams } from "react-router-dom"

const CouponDetailPage = ()=>{
    const {params} = useParams();
    return(
        <div>
            {params}
        </div>
    )
}

export default CouponDetailPage;