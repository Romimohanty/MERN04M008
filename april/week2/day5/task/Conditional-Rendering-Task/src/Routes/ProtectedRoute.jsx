import React from 'react';
import { Navigate } from 'react-router';

function ProtectedRoute({ children }) {
    // isLogin status check karna
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));

    // Agar login nahi hai toh login page par redirect karega
    if (!isLogin) {
        return <Navigate to="/login" replace />;
    }

    // Agar login hai toh Dashboard dikhayega
    return children;
}

export default ProtectedRoute;