import React, { ReactNode, createContext, useState } from 'react';

export interface TokenDto {
  accessToken: string | null;
  refreshToken: string | null;
}

export type AuthContextType = {
  token: TokenDto | null;
  setToken: (token: TokenDto) => void;
  logout: () => void;
  isAuth: () => boolean;
};

export const AuthContext = createContext<AuthContextType|null>(null);
const { Provider } = AuthContext;

interface IAuthProvider {
  children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const [token, setToken] = useState<TokenDto | null>(null);

  const isAuth = () => {
    console.log('isAuth');
    console.log(token);
    return !!token;
  };

  const logout = () => {
    setToken(null);
  };

  return <Provider value={{ token, setToken, logout, isAuth }}>{children}</Provider>;
};

AuthProvider.context = AuthContext;

export default AuthProvider;
