import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C5299',
    },
  },
  typography: {
    fontFamily: [
      '"Spoqa Han Sans Neo"',
      '"Spoqa Han Sans JP"',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: '100%',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          boxSizing: 'border-box',
          borderRight: 0,
        },
      },
    },
  },
});

export default theme;
