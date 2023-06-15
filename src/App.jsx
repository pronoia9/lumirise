import React, { useEffect, useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';

import { Navbar, Contact, Experience, Hero, Skills, Works, Footer } from './components';
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
        <Navbar theme={theme} setTheme={setTheme} />

        <Hero />
        <Skills />
        <Works />
        <Experience />
        <Contact />
        
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  min-height: 50vh;
  position: relative;
  /* overflow: hidden; */
`;
