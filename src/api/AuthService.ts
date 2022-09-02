import api from "./http";
import {
  LoginResponse,
  SignUpResponse,
  ILoginData,
  ISignUpData,
} from "src/interfaces";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    loginData: ILoginData,
  ): Promise<AxiosResponse<LoginResponse>> {
    const data = `username=${loginData.username}&password=${loginData.password}`;
    return api.post<LoginResponse>(`${process.env.REACT_APP_URL}/login`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  static async register(
    regData: ISignUpData,
  ): Promise<AxiosResponse<SignUpResponse>> {
    const url = `username=${regData.username}&password=${regData.password}`;
    return api.post<SignUpResponse>(`/register/?${url}`);
  }
}
