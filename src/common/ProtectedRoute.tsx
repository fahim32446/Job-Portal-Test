import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { authToken } = useContext(AuthContext);

 
  return authToken ? <Outlet /> : <Navigate to='/signin' />;
};

export default ProtectedRoute;
