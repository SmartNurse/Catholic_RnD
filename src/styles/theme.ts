import { createTheme, css } from '@mui/material/styles';

export const greenTheme = createTheme({
  palette: {
    primary: {
      light: '#EBF8F3',
      main: '#14855B',
    },
    secondary: {
      main: '#13AD74',
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
      styleOverrides: {
        ...css`
          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */

          /* Hide input[type="number"] arrow button */
          input[type='number']::-webkit-outer-spin-button,
          input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* SnackbarItem styles */
          .SnackbarItem-message {
            white-space: pre-wrap;
          }
        `,
      },
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
          backgroundColor: '#EBF8F3',

          '&.Mui-selected': {
            color: '#fff',
            backgroundColor: '#14855B',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
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
          marginRight: 0,
          '.MuiTypography-root': {
            fontSize: 14,
          },
        },
      },
    },
  },
});

export const blueTheme = createTheme({
  palette: {
    primary: {
      light: '#EDF3FA',
      main: '#2264A8',
    },
    secondary: {
      main: '#2E85DC',
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
      styleOverrides: {
        ...css`
          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */

          /* Hide input[type="number"] arrow button */
          input[type='number']::-webkit-outer-spin-button,
          input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* SnackbarItem styles */
          .SnackbarItem-message {
            white-space: pre-wrap;
          }
        `,
      },
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
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
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
          marginRight: 0,
          '.MuiTypography-root': {
            fontSize: 14,
          },
        },
      },
    },
  },
});

export const redTheme = createTheme({
  palette: {
    primary: {
      light: '#FFF2F3',
      main: '#AD4751',
    },
    secondary: {
      main: '#D8616C',
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
      styleOverrides: {
        ...css`
          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */

          /* Hide input[type="number"] arrow button */
          input[type='number']::-webkit-outer-spin-button,
          input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* SnackbarItem styles */
          .SnackbarItem-message {
            white-space: pre-wrap;
          }
        `,
      },
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
          backgroundColor: '#FFF2F3',

          '&.Mui-selected': {
            color: '#fff',
            backgroundColor: '#AD4751',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
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
          marginRight: 0,
          '.MuiTypography-root': {
            fontSize: 14,
          },
        },
      },
    },
  },
});

export const purpleTheme = createTheme({
  palette: {
    primary: {
      light: '#FBF3FF',
      main: '#6A3A87',
    },
    secondary: {
      main: '#9C57C7',
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
      styleOverrides: {
        ...css`
          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */

          /* Hide input[type="number"] arrow button */
          input[type='number']::-webkit-outer-spin-button,
          input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* SnackbarItem styles */
          .SnackbarItem-message {
            white-space: pre-wrap;
          }
        `,
      },
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
          backgroundColor: '#FBF3FF',

          '&.Mui-selected': {
            color: '#fff',
            backgroundColor: '#6A3A87',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
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
          marginRight: 0,
          '.MuiTypography-root': {
            fontSize: 14,
          },
        },
      },
    },
  },
});

export const blackTheme = createTheme({
  palette: {
    primary: {
      light: '#FFFFFF1A',
      main: '#1A1A1A',
    },
    secondary: {
      main: '#333333',
    },
    text: {
      primary: "#FFF",
      secondary: "#FFF",
      disabled: "#FFF",
    },
    mode: "dark",
  },

  typography: {
    allVariants: {
      color: "white",
    },

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
      styleOverrides: {
        ...css`
          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */

          /* Hide input[type="number"] arrow button */
          input[type='number']::-webkit-outer-spin-button,
          input[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* SnackbarItem styles */
          .SnackbarItem-message {
            white-space: pre-wrap;
          }
        `,
      },
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
          backgroundColor: "black",
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
          backgroundColor: '#FFFFFF1A',

          '&.Mui-selected': {
            color: '#fff',
            backgroundColor: '#FFFFFF33',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputProps: { style: { color: "white" } },
      }, 
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
          marginRight: 0,
          '.MuiTypography-root': {
            fontSize: 14,
          },
        },
      },
    },
  },
});

