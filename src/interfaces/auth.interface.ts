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
export interface ValidationError {
  detail: {
    loc: string[];
    msg: string;
    type: string;
  }[];
}

export type LoginResponse = LoginResponseOK | ValidationError;
export type SignUpResponse = SignUpResponseOK | ValidationError;
