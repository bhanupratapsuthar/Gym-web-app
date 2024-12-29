import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { user } from '../redux/slices/authSlice';

const ProtectedRoute = ({children}) => {
    const token = useSelector((state)=>state.auth.token)

    if (!token) {
        return <Navigate to={"/login"} />;
    } else {
        return children;
    }
}

export default ProtectedRoute