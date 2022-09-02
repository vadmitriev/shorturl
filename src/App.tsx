import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import "src/styles/App.scss";

import Router from "./routes";
import { store } from "./store";
import { useTheme } from "./hooks/useTheme";

const App: React.FC = () => {
  const { theme } = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      background: {
        default: theme === "light" ? "#D3F0FB" : "#000000",
      },
      text: {
        primary: theme === "light" ? "#000000" : "#FFFFFF",
      },
    },
  });

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <CssBaseline />
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
