import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthProvider, { AuthContextType } from '../../provider/AuthProvider';

const PrivateRoutes = () => {
  const { isAuth } = useContext(AuthProvider.context) as AuthContextType;

  //   const auth = await ;
  console.log('Check auth');
  console.log(isAuth());
  return isAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
