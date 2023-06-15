import React, { useEffect, useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';

import { Navbar, Footer } from './components';
import { HomePage } from './pages';
import GlobalStyles from './styles/GlobalStyles';
import { getSystemTheme, getTheme, systemThemeChangeHandler } from './utils/utils';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const [theme, setTheme] = useState(getSystemTheme());

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => {
      systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler);
    };
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
