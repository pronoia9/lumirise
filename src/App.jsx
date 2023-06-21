import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Navbar, Footer, HomePage, WorksPage, OopsPage } from './components';
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
        <Route path='/works' element={<WorksPage />} />
        <Route exact path='/' element={<HomePage />} />
        <Route path='/' element={<OopsPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
