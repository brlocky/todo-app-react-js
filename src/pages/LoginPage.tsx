import React, { useContext, useState } from 'react';
import LoginForm, { LoginProps } from '../components/forms/LoginForm';
import { useMutation } from 'react-query';
import { login as loginQuery } from '../services/apiService';
import { AxiosResponse } from 'axios';
import { AuthContext, AuthContextType } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { isAuth, login } = useContext(AuthContext) as AuthContextType;

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

  if (isAuth()) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {errorMessage && <div>An error occurred: {errorMessage}</div>}

      {isLoading && <div>Loading...</div>}

      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
