import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import 'src/styles/App.scss';

import Router from './routes';
import { useAppSelector } from './hooks/redux';

const App: React.FC = () => {
  const { theme } = useAppSelector((state) => state.app);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          background: {
            default: theme === 'light' ? '#D3F0FB' : '#000000',
          },
          text: {
            primary: theme === 'light' ? '#000000' : '#FFFFFF',
          },
        },
      }),
    [theme],
  );

  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <CssBaseline />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
