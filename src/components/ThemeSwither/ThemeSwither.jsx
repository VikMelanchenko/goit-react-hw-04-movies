import React, { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme.js';
import { GlobalStyles } from '../../global.js';
import { useDarkMode } from '../../useDarkMode';

function ThemeSwither() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default ThemeSwither;
