import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { TokenDto, TokenService } from '../services/TokenService';

export type AuthContextType = {
  login: (token: TokenDto) => void;
  logout: () => void;
  isAuth: () => boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);
const { Provider } = AuthContext;

interface IAuthProvider {
  children: ReactNode;
  tokenService: TokenService;
}

export const AuthProvider = ({ children, tokenService }: IAuthProvider) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(!!tokenService.getToken());
  }, []);

  const isAuth = () => {
    return auth;
  };

  const login = (token: TokenDto) => {
    tokenService.setToken(token);
    setAuth(true);
  };

  const logout = () => {
    tokenService.deleteToken();
    setAuth(false);
  };

  return (
    <Provider
      value={{
        login,
        logout,
        isAuth,
      }}>
      {children}
    </Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};
