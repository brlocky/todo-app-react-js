import React, { useEffect } from 'react';
import { deleteCredentials } from '../redux/slices/auth-slice';
import { useAppDispatch } from '../redux/store/hook';

const LogoutPage = () => {
  const dispatch = useAppDispatch();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    dispatch(deleteCredentials());
  });
  
  return <div />;
};

export default LogoutPage;
