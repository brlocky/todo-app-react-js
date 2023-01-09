import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { NavLink } from 'react-router-dom';
import RegistrationForm, { RegistrationProps } from '../components/forms/RegistrationForm';
import { setCredentials } from '../redux/slices/auth-slice';
import { useAppDispatch } from '../redux/store/hook';
import { register } from '../services/api-service';

const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = (data: RegistrationProps) => {
    setErrorMessage('');
    mutation.mutate({ ...data });
  };
  const dispatch = useAppDispatch();

  const mutation = useMutation(register, {
    onSuccess: (response: AxiosResponse) => {
      dispatch(setCredentials(response.data));
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
              Create a new account
            </h2>
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <RegistrationForm onSubmit={handleRegistration} errorMessage={errorMessage} />
          )}

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <NavLink className="font-medium text-indigo-600 hover:text-indigo-500" to="/login">
                Sign In
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

export default RegisterPage;
