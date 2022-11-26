import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useBuyer } from "../Components/isBuyer";
import { authContext } from "../Context/UserContext";

const BuyerRoute = ({children}) => {
    const {user} = useContext(authContext)
    const [isBuyer, buyerLoading] = useBuyer(user?.email)
    const location = useLocation()
    if(buyerLoading){
        return <div className='flex justify-center items-center h-96'><progress className="progress w-56"></progress></div>
    }
    if(isBuyer){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default BuyerRoute;