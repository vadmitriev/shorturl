import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOKEN } from "src/constants";
import { isError, isPending, isFulfilled } from "../helpers";
import { login, signUp, logout } from "./actions";

interface AuthState {
  username: string | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const token = localStorage.getItem(TOKEN);

const initialState: AuthState = {
  username: null,
  token: token ?? null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.access_token;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        if ("username" in action.payload) {
          state.username = action.payload.username;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.username = null;
      })
      .addMatcher(isPending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addMatcher(isFulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
