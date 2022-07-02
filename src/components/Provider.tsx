import React from 'react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

interface Props {
  children: React.ReactNode;
}

function Provider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{ body: { minWidth: '1440px', overflowX: 'auto' } }}
      />
      {children}
    </ThemeProvider>
  );
}

export default Provider;
