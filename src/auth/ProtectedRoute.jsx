import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { user } from '../redux/slices/authSlice';

const ProtectedRoute = () => {
    const {token} = useSelector(user);
    if (token === null) {
        return <Navigate to={"/login"} />;
    } else {
        return children;
    }
}

export default ProtectedRoute