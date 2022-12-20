import axios from 'axios';
// TODO add .env
const baseUrl = 'http://localhost:3001';

export interface RegisterDto {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export function register(data: RegisterDto) {
  return axios.post(`${baseUrl}/auth/register/`, data);
}

export function login(data: LoginDto) {
  return axios.post(`${baseUrl}/auth/login/`, data);
}
