import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

interface Props {
  children: React.ReactNode;
}

function Provider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Provider;
