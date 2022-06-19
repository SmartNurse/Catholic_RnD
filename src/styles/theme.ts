import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
  },
});

export default theme;
