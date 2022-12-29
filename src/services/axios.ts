import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TokenServiceInstance } from './TokenService';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const getToken = () => {
  return TokenServiceInstance.getToken();
};

const reqInterceptor = (request: AxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    if (!request.headers) {
      request.headers = {};
    }
    request.headers.authorization = `Bearer ${token.accessToken}`;
  }

  return request;
};

const errInterceptorReq = (error: AxiosError) => {
  return Promise.reject(error);
};

const resInterceptor = (response: AxiosResponse) => {
  return response;
};

interface EAxiosResponse extends AxiosResponse {
  error: string;
}

const errInterceptorRes = (error: AxiosError<EAxiosResponse>) => {
  const token = getToken();
  if (token && error.response?.status === 401 && error.response.data.error === 'Expired Token') {
    const refreshToken = token.refreshToken;
    return Promise.resolve(
      axiosInstance.post('auth/refresh', { refreshToken }).then((res) => {
        if (res.status === 201 && res.data.accessToken !== null) {
          const accessToken = res.data.accessToken;
          TokenServiceInstance.setToken({
            accessToken,
            refreshToken
          });
          const originalRequest = error.config || {};
          return Promise.resolve(axiosInstance(originalRequest));
        }

        throw new Error('Could not refresh token');
      })
    ).catch((e) => {
      console.error('Refresh Token - ', e.message);
      TokenServiceInstance.deleteToken();
      window.location.reload();
    });
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(reqInterceptor, errInterceptorReq);
axiosInstance.interceptors.response.use(resInterceptor, errInterceptorRes);
