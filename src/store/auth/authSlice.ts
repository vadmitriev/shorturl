import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOKEN } from "src/constants";
import { isError, isPending, isFulfilled } from "../helpers";
import { login, signUp, logout } from "./actions";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const token = localStorage.getItem(TOKEN);

const initialState: AuthState = {
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
        if (action.payload) {
          state.token = action.payload.access_token;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      })
      .addMatcher(isPending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
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
