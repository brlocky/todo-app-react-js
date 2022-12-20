import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthProvider, { AuthContextType } from '../../provider/AuthProvider';

const PrivateRoutes = () => {
  const { isAuth } = useContext(AuthProvider.context) as AuthContextType;

  return isAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
