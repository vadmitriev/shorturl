import authSlice from './auth/authSlice';
import shortLinksSlice from './shortLinks/shortLinksSlice';
import appSlice from './app/appSlice';

export const rootReducer = {
  app: appSlice,
  shortLinks: shortLinksSlice,
  auth: authSlice,
};
