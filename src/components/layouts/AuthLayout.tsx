import React, { useEffect } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { isAuth } from '../../redux/slices/auth-slice';
import { useAppSelector } from '../../redux/store/hook';

const AuthLayout = () => {
  const outlet = useOutlet();

  useEffect(() => {
    document.body.classList.add('h-full');
    const root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
    root.setAttribute('class', 'h-full bg-gray-50');

    // Return function will be used on Unmount
    return () => {
      document.body.classList.remove('h-full');
      const root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
      root.setAttribute('class', '');
    };
  }, []);

  if (useAppSelector(isAuth)) {
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
