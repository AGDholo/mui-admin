import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Quicksand,sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#020e25',
    },
    text: {
      primary: '#020e25',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation: {
          boxShadow:
            '0 2px 30px -1px rgb(85 85 85 / 8%), 0 4px 30px 0 rgb(85 85 85 / 6%), 0 1px 30px 0 rgb(85 85 85 / 3%)',
        },
        root: {
          borderRadius: '10px',
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
