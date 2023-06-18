import { darkTheme, lightTheme } from '../styles/Themes';

export const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const getTheme = (theme) => (theme === 'light' ? lightTheme : darkTheme);

export const toggleTheme = (setTheme) => setTheme((prev) => prev === 'dark' ? 'light' : 'dark');

export const isDarkTheme = (theme) => theme === 'dark';

export const systemThemeChangeHandler = (e, setTheme) => { setTheme(e.matches ? 'dark' : 'light'); };

export const lowerCase = (t) => `${t}`.toLowerCase();

export const setProjectsCount = (rows = 2) => (window.innerWidth > 1020 ? 3 : window.innerWidth > 767 ? 2 : 1) * rows;
