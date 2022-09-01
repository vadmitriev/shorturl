import { useCallback, useState, useEffect } from "react";

export type ColorTheme = "dark" | "light";

const THEME_QUERY = "(prefers-color-scheme: dark)";

const THEME_KEY = "data-theme";

const prefersTheme: ColorTheme = window.matchMedia(THEME_QUERY).matches
  ? "dark"
  : "light";

export const useTheme = (saveInLocalStorage = true) => {
  const lsTheme = saveInLocalStorage
    ? localStorage.getItem(THEME_KEY)
    : prefersTheme;
  const initTheme: ColorTheme = (lsTheme as ColorTheme) ?? "dark";

  const [theme, setTheme] = useState<ColorTheme>(initTheme);

  document.documentElement.setAttribute(THEME_KEY, theme);

  useEffect(() => {
    console.log("theme", theme);
  }, [theme]);

  const changeTheme = (newTheme: ColorTheme) => {
    setTheme(newTheme);

    if (saveInLocalStorage) {
      localStorage.setItem(THEME_KEY, newTheme);
    }

    document.documentElement.setAttribute(THEME_KEY, newTheme);
  };

  window.matchMedia(THEME_QUERY).addListener((e) => {
    const newTheme = e.matches ? "dark" : "light";
    if (newTheme !== theme) {
      changeTheme(newTheme);
    }
  });

  const toggleTheme = useCallback(() => {
    theme === "light" ? changeTheme("dark") : changeTheme("light");
  }, [theme, changeTheme]);

  return { theme, changeTheme, toggleTheme };
};
