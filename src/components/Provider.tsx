import React from 'react';
import { IntlProvider } from 'react-intl';
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import locale from '../locale';
import theme from '../styles/theme';
import store, { persistor } from '../store';

interface Props {
  children: React.ReactNode;
}

function Provider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default Provider;
