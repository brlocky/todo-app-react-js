import { axiosInstance } from "./axios";

// TODO add .env
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
  return axiosInstance.post(`auth/register/`, data);
}

export function login(data: LoginDto) {
  return axiosInstance.post(`auth/login/`, data);
}

export interface CreateTodoDto {
  message: string;
}

export function createTodo(data: CreateTodoDto) {
  return axiosInstance.post(`todo`, data);
}
