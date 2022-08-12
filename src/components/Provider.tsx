import React from 'react';
import { IntlProvider } from 'react-intl';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import locale from '../locale';
import theme from '../styles/theme';
import store, { persistor } from '../store';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function Provider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IntlProvider locale="ko" messages={locale.ko}>
        <SnackbarProvider
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        >
          <QueryClientProvider client={queryClient}>
            <ReduxProvider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {children}
              </PersistGate>
            </ReduxProvider>
          </QueryClientProvider>
        </SnackbarProvider>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default Provider;
