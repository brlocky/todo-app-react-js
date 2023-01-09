import React, { useContext, useState } from 'react';
import LoginForm, { LoginProps } from '../components/forms/LoginForm';
import { useMutation } from 'react-query';
import { login as loginQuery } from '../services/ApiService';
import { AxiosResponse } from 'axios';
import { AuthContext, AuthContextType } from '../provider/AuthProvider';
import { NavLink } from 'react-router-dom';

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

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <NavLink className="font-medium text-indigo-600 hover:text-indigo-500" to="/register">
                Register new Account
              </NavLink>
            </div>

            <div className="text-sm">
              <NavLink
                className="font-medium text-indigo-600 hover:text-indigo-500"
                to="/forgot-password">
                Forgot your password?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
