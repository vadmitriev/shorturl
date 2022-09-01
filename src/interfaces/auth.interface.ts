export interface ILoginData {
  username: string;
  password: string;
}

export interface ISignUpData {
  username: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}
