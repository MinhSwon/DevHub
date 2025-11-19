import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

/**
 * ProtectedRoute
 * - Bảo vệ route yêu cầu đăng nhập
 * - Có thể truyền thêm requiredRole để giới hạn quyền (vd: 'admin')
 */
const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // Nếu không đúng role, đưa về dashboard người dùng thường
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;


