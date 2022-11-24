import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(authContext)
    if(loading){
        return <progress className="progress w-56 my-80 mx-auto"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;