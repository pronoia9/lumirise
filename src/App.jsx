import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import { getSystemTheme, getTheme, systemThemeChangeHandler } from './utils/utils';

const App = () => {
  const [theme, setTheme] = useState(getSystemTheme());

  // EVENT LISTENER FOR SYSTEM THEME CHANGE
  useEffect(() => {
    const systemThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeWatcher.addEventListener('change', (e) => systemThemeChangeHandler(e, setTheme));
    return () => { systemThemeWatcher.removeEventListener('change', systemThemeChangeHandler); };
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
