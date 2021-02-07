import Navigation from '../Navigation/Navigation';
import ThemeSwither from '../ThemeSwither/ThemeSwither';
import styles from '../../css/styles.module.css';

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme.js';
import { GlobalStyles } from '../../global.js';

export default function Appbar() {
  const [theme, setTheme] = useState('light');

  return (
    <header className={styles.Searchbar}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Navigation />
          <ThemeSwither />
        </>
      </ThemeProvider>
      );
    </header>
  );
}
