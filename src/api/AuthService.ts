import api from './http';
import {
  LoginResponse,
  SignUpResponse,
  ILoginData,
  ISignUpData,
} from 'src/interfaces';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static async login(
    loginData: ILoginData,
  ): Promise<AxiosResponse<LoginResponse>> {
    const data = `username=${loginData.username}&password=${loginData.password}`;
    return api.post<LoginResponse>('/login', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  static async register(
    regData: ISignUpData,
  ): Promise<AxiosResponse<SignUpResponse>> {
    return api.post<SignUpResponse>('/register', null, {
      params: {
        username: regData.username,
        password: regData.password,
      },
    });
  }
}
