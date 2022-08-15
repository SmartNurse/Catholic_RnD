import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C5299',
    },
    text: {
      primary: '#000000E5',
    },
  },

  typography: {
    fontFamily: [
      '"Spoqa Han Sans Neo"',
      '"Spoqa Han Sans JP"',
      'sans-serif',
    ].join(','),

    h5: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '21px',
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '18px',
    },
    body2: {
      fontSize: 14,
      lineHeight: '18px',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      `,
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderWidth: 1,
          borderColor: '#EFF0F1',
        },
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
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 32,
          '.MuiTabs-indicator': {
            display: 'none',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 13,
          minHeight: 32,
          lineHeight: '12px',
          minWidth: 'unset',
          padding: '4px 8px',
          wordBreak: 'keep-all',
          textTransform: 'none',
          backgroundColor: '#EDF3FA',

          '&.Mui-selected': {
            color: '#fff',
            backgroundColor: '#2264A8',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiInputBase-sizeSmall': {
            fontSize: 14,
            minHeight: 38,
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: '52px !important',
          minHeight: '52px !important',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '.MuiTypography-root': {
            fontSize: 14,
          },
        },
      },
    },
  },
});

export default theme;
