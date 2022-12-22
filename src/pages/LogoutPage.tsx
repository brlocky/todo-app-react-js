import React, { useContext, useEffect } from 'react';
import { AuthContext, AuthContextType } from '../provider/AuthProvider';

const LogoutPage = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    logout();
  });
  
  return <div />;
};

export default LogoutPage;
