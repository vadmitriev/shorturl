import { rootReducer } from './rootReducer';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { STORE_KEY } from 'src/constants';

const reHydrateStore = () => {
  const oldState = localStorage.getItem(STORE_KEY);
  if (oldState !== null) {
    return JSON.parse(oldState);
  }
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

store.subscribe(() => {
  localStorage.setItem(STORE_KEY, JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
