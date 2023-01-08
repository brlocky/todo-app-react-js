import React, { useContext, useEffect, useState } from 'react';
import LoginForm, { LoginProps } from '../components/forms/LoginForm';
import { useMutation } from 'react-query';
import { login as loginQuery } from '../services/ApiService';
import { AxiosResponse } from 'axios';
import { AuthContext, AuthContextType } from '../provider/AuthProvider';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext) as AuthContextType;

  const handleLogin = (data: LoginProps) => {
    setErrorMessage('');
    mutation.mutate({ ...data });
  };

  const mutation = useMutation(loginQuery, {
    onSuccess: (response: AxiosResponse) => {
      login(response.data);
    },
    onError: ({ response }) => {
      setErrorMessage(response.data.error);
    }
  });

  const { isLoading } = mutation;

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

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
