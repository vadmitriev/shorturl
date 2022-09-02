export interface ILoginData {
  username: string;
  password: string;
}

export interface ISignUpData extends ILoginData {}

export interface LoginResponseOK {
  access_token: string;
  token_type: string;
}

export interface SignUpResponseOK {
  username: string;
}

export interface AuthResponseError {
  detail: string;
}

export type LoginResponse = LoginResponseOK | AuthResponseError;
export type SignUpResponse = SignUpResponseOK | AuthResponseError;
