import React from 'react';
import { useAuth } from '../../provider/AuthProvider';
import { Navigate, useOutlet } from 'react-router-dom';

const AuthLayout = () => {
  const { isAuth } = useAuth();
  const outlet = useOutlet();

  if (isAuth()) {
    return <Navigate to="/" />;
  }

  return (
    <div className="App">
      <div className="containe">
        <div className="row d-flex justify-content-center">
          <div className="col col-auto col-md-8 col-lg-4 p-5">{outlet}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
