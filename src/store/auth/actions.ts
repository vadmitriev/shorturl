import { TOKEN } from "src/constants";
import { ILoginData, ISignUpData } from "src/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "src/api/AuthService";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (userData: ISignUpData, { rejectWithValue }) => {
    try {
      const { data } = await AuthService.register(userData);
      localStorage.setItem(TOKEN, data.access_token);
      return { ...data, token: data.access_token };
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue("Произошла ошибка");
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData: ILoginData, { rejectWithValue }) => {
    try {
      const data = await AuthService.login(userData);
      localStorage.setItem(TOKEN, data.access_token);
      return { ...data, token: data.access_token };
    } catch (e: unknown) {
      return rejectWithValue("Не удалось войти");
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem(TOKEN);
  return true;
});
