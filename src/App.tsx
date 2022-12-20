import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import NavBar from './components/layouts/NavBar';
import Layout from './components/layouts/Layout';
import LoginPage from './pages/LoginPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import PrivateRoutes from './components/private-route/PrivateRoutes';
import LogoutPage from './pages/LogoutPage';
import AuthProvider from './provider/AuthProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <NavBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/Todo" element={<TodoPage />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
