import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import locale from 'locale';
import store, { persistor } from 'store';
import { greenTheme, blueTheme, redTheme, purpleTheme, blackTheme } from 'styles/theme';
import { getLocalStorage } from 'utils/storage';


interface Props {
  children: React.ReactNode;
}

function Provider({ children }: Props) {
  const [theme, setTheme] = useState(greenTheme);

  useEffect(() => {
    let theme_color = getLocalStorage("theme_color");
    if (theme_color === "BLUE") setTheme(blueTheme);
    else if (theme_color === "RED") setTheme(redTheme);
    else if (theme_color === "PURPLE") setTheme(purpleTheme);
    else if (theme_color === "BLACK") setTheme(blackTheme);
    else setTheme(greenTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <IntlProvider locale="ko" messages={locale.ko}>
          <SnackbarProvider
            anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
          >
            <ReduxProvider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {children}
              </PersistGate>
            </ReduxProvider>
          </SnackbarProvider>
        </IntlProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default Provider;
