import { darkTheme, lightTheme } from '../styles/Themes';

export const setTheme = (theme) => (theme === 'light' ? lightTheme : darkTheme);

export const isDarkTheme = (theme) => theme === 'dark';