import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSeller } from "../Components/useSeller";
import { authContext } from "../Context/UserContext";

const SellerRoute = ({children}) => {
    const {user} = useContext(authContext)
    const [isSeller, sellerLoading] = useSeller(user?.email)
    const location = useLocation()
    if(sellerLoading){
        return <div className='flex justify-center items-center h-96'><progress className="progress w-56"></progress></div>
    }
    if(isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;