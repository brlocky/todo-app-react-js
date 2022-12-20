import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext, AuthContextType } from '../provider/AuthProvider';

const LogoutPage = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;
  logout();

  return <Navigate to="/login" />;
};

export default LogoutPage;
