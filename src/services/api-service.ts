import { axiosInstance } from "./axios";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  username: string;
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
