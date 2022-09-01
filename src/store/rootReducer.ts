import authSlice from "./auth/authSlice";
import shortLinksSlice from "./shortLinks/shortLinksSlice";

export const rootReducer = {
  shortLinks: shortLinksSlice,
  auth: authSlice,
};
