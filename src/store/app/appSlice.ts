import { ColorTheme, THEME_KEY, THEME_QUERY } from 'src/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  theme: ColorTheme;
}

const prefersTheme: ColorTheme = window.matchMedia(THEME_QUERY).matches
  ? 'dark'
  : 'light';
const initalTheme = localStorage.getItem(THEME_KEY);

const initialState: AppState = {
  theme: (initalTheme as ColorTheme) ?? prefersTheme,
};

const setTheme = (newTheme: ColorTheme) => {
  localStorage.setItem(THEME_KEY, newTheme);
  document.documentElement.setAttribute(THEME_KEY, newTheme);
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      setTheme(state.theme);
    },
    changeTheme(state, action: PayloadAction<ColorTheme>) {
      state.theme = action.payload;
      setTheme(state.theme);
    },
  },
});

export const { toggleTheme, changeTheme } = appSlice.actions;

export default appSlice.reducer;
