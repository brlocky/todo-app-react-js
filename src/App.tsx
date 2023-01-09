import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import LogoutPage from './pages/LogoutPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import { QueryClient, QueryClientProvider, QueryFunctionContext, QueryKey } from 'react-query';
import ProtectedLayout from './components/layouts/ProtectedLayout';
import AuthLayout from './components/layouts/AuthLayout';
import { axiosInstance } from './services/axios';
import RegisterPage from './pages/RegisterPage';

// Define a default query function that will receive the query key
// the queryKey is guaranteed to be an Array here
const defaultQueryFn = async ({ queryKey }: QueryFunctionContext<QueryKey, unknown>) => {
  const url = (process.env.REACT_APP_API_URL || '') + queryKey[0];
  const response = await axiosInstance.get(url);
  return response?.data;
};

// provide the default query function to your app with defaultOptions
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Todo" element={<TodoPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
