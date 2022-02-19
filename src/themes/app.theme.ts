import { createTheme } from '@mui/material';

const appTheme = createTheme({
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
        elevation1: {
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

export default appTheme;
