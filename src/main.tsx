import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './App';
import theme from './theme';
import RESET_PASSWORD from "./getConfiguration/sample/reset-password";

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App templateData={RESET_PASSWORD} />
    </ThemeProvider>
  </React.StrictMode>
);
