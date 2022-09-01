import api from "./http";
import { AuthResponse, ILoginData, ISignUpData } from "src/interfaces";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(loginData: ILoginData) /* Promise<AuthResponse> */ {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/login`, {
        method: "POST",
        // mode: "no-cors",
        credentials: "same-origin",
        // referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${loginData.username}&password=${loginData.password}`,
      });

      const data = await response.json();
      console.log("data", data);

      if (!response.ok || !data) {
        const error = new Error();
        // errors?.map((e) => e.message).join("\n") ?? "unknown",
        return Promise.reject(error);
      }

      return data;
    } catch (e: unknown) {
      console.log("err", e);
      return Promise.reject(e);
    }

    // try {
    //   const response = await fetch(`${process.env.REACT_APP_URL}/login`, {
    //     method: "POST",
    //     mode: "no-cors",
    //     credentials: "same-origin",
    //     referrerPolicy: "no-referrer",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: `username=${loginData.username}&password=${loginData.password}`,
    //   });

    //   type JSONResponse = {
    //     data?: AuthResponse;
    //     errors?: Array<{ message: string }>;
    //   };

    //   console.log("response", response);
    //   const hm = await response.json();
    //   console.log("hm", hm);

    //   const { data, errors }: JSONResponse = await response.json();

    //   if (!response.ok || !data) {
    //     const error = new Error(
    //       errors?.map((e) => e.message).join("\n") ?? "unknown",
    //     );
    //     return Promise.reject(error);
    //   }

    //   return data;
    // } catch (e: unknown) {
    //   console.log("err", e);
    //   return Promise.reject(e);
    // }
  }
  // static async login(data: ILoginData): Promise<AxiosResponse<AuthResponse>> {
  //   return api.post<AuthResponse>("/login", {
  //     mode: "no-cors",
  //     credentials: "same-origin",
  //     referrerPolicy: "no-referrer",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: `username=${data.username}&password=${data.password}`,
  // headers: {
  //   "Content-Type": "multipart/form-data",
  //   "Access-Control-Allow-Headers": "X-Requested-With, privatekey",
  // },

  // mode: "no-cors",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "application/json",
  // },
  // withCredentials: true,
  // credentials: "same-origin",
  // data: {
  //   grant_type: "",
  //   username: data.username,
  //   password: data.password,
  //   scope: "",
  //   client_id: "",
  //   client_secret: "",
  // },
  // });
  // }

  static async register(
    data: ISignUpData,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/register", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data,
    });
  }
}
