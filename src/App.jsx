import React, { useEffect, useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';

import { Navbar } from './components';
import { Contact, Experience, Hero, Skills, Works } from './sections';
import GlobalStyles from './styles/GlobalStyles';
import { getSystemTheme, getTheme, systemThemeChangeHandler } from './utils/utils';

export default function App() {
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
      <Container>
        <Navbar />
        <Hero />
        <Skills />
        <Works />
        <Experience />
        <Contact />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  position: relative;
  /* overflow: hidden; */
  min-height: 50vh;
`;
