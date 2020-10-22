import React from 'react';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {FONT_SIZE_STEP} from '../constants/metrics';

const ContrastThemeProvider = ({children}) => {
  const theme = useSelector((state) => state.themeState);
  return (
    <ThemeProvider
      theme={{theme: theme.theme, delta: theme.delta * FONT_SIZE_STEP}}>
      {children}
    </ThemeProvider>
  );
};

export default ContrastThemeProvider;
