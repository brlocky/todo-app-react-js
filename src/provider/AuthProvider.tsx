import React, { ReactNode, createContext, useContext, useState } from 'react';
export interface TokenDto {
  accessToken: string | null;
  refreshToken: string | null;
}

export type AuthContextType = {
  login: (token: TokenDto) => void;
  logout: () => void;
  isAuth: () => boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);
const { Provider } = AuthContext;

interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [token, setToken] = useState<TokenDto | null>(null);

  const isAuth = () => {
    return !!token;
  };

  const login = (token: TokenDto) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <Provider
      value={{
        login,
        logout,
        isAuth
      }}>
      {children}
    </Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};
