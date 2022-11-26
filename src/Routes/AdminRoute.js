import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAdmin } from "../Components/useAdmin";
import { authContext } from "../Context/UserContext";

const AdminRoute = ({children}) => {
    const {user} = useContext(authContext)
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const location = useLocation()
    if(adminLoading){
        return <div className='flex justify-center items-center h-96'><progress className="progress w-56"></progress></div>
    }
    if(isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;