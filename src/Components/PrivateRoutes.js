import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthValue } from '../Auth/UserContext';
import Dashboard from '../Pages/Private/Dashboard';

const PrivateRoute = () => {
    const auth = useAuthValue()
    
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    
    
    return auth.currentUser ? <Dashboard /> : <Navigate to="/auth" />;
}

export default PrivateRoute