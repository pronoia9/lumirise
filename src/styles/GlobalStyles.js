import { createGlobalStyle } from 'styled-components';

import { resetCSS } from './ResetCSS';
import { swiperCSS } from './SwiperCSS';
import { rem } from '../utils/utils';

const GlobalStyles = createGlobalStyle`
  ${resetCSS}
  ${swiperCSS}
  
  @font-face { font-family: 'Caveat'; src: url('/fonts/Caveat/Caveat-VariableFont_wght.ttf'); }
  @font-face { font-family: 'Caveat Brush'; src: url('/fonts/Caveat_Brush/CaveatBrush-Regular.ttf'); }
  @font-face { font-family: 'Jost'; src: url('/fonts/Jost/Jost-VariableFont_wght.ttf'); }
  @font-face { font-family: 'Fira Code'; src: url('/fonts/Fira_Mono/FiraMono-Regular.ttf'); }

  :root {
    --c-background: ${({ theme }) => theme.background};
    --c-background2: ${({ theme }) => theme.background2};
    --c-background3: ${({ theme }) => theme.background3};
    --c-navbarBackground: ${({ theme }) => theme.navbarBackground};
    --c-gradient1: linear-gradient(0deg, ${({ theme }) => theme.background2} 0%, ${({ theme }) => theme.background} 100%);
    --c-gradient2: linear-gradient(0deg, ${({ theme }) => theme.background} 0%, ${({ theme }) => theme.background2} 100%);
    --c-gradient3: linear-gradient(180deg, ${({ theme }) => theme.background2} 0%, ${({ theme }) => theme.background2} 100%);
    --c-font: ${({ theme }) => theme.font};
    --c-accent: ${({ theme }) => theme.accent};
    --c-lineBackground: ${({ theme }) => theme.lineBackground};
    --c-lineBorder: ${({ theme }) => theme.lineBorder};
    --c-lineShadow: ${({ theme }) => theme.lineShadow};
    --c-dotsInvert: ${({ theme }) => theme.dotsInvert};
    --c-inputPlaceholder: ${({ theme }) => theme.inputPlaceholder};
    --c-cursor: ${({ theme }) => theme.cursor};
    --f-primary: 'Jost';
    --f-secondary: 'Caveat';
    --f-tertiary: 'Caveat Brush';
    --f-code: 'Fira Code';
  }

  * {
    outline: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  ::-webkit-input-placeholder, ::-moz-placeholder, :-moz-placeholder, :-ms-input-placeholder {
    color: var(--c-inputPlaceholder);
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: auto !important;
    font-size: ${rem(16)};
    font-family: var(--f-primary), sans-serif;
    font-weight: 400;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }

  html {
    background: var(--c-background);
    transition: background 0.5s ease-in-out;
  }

  body, #root {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    color: var(--c-font);
    overflow-x: hidden;
    transition: color 0.5s ease-in-out;
  }

  *::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  a {
    color: var(--c-accent);
    text-decoration: none !important;
    cursor: pointer;
    outline: none;
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    
    /* &:link { color: var(--c-accent); } */
    /* &:active { color: var(--c-font); } */
    /* &:visited { color: var(--c-font); } */
    /* &:hover { text-decoration: underline; color: var(--c-accent); } */
    
    img { border: none; }
  }

  img {
    max-width: 100%;
  }

  label {
    cursor: pointer;
  }

  iframe {
    max-width: 100%;
  }

  b, strong {
    font-weight: 700;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: 0;
    margin-bottom: ${rem(15)};
    font-weight: 700;
    line-height: 1.3;
  }
  h1 {
    font-size: ${rem(44)};
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
  h2 {
    font-size: ${rem(41)};
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
  h3 { font-size: ${rem(38)}; }
  h4 { font-size: ${rem(32)}; }
  h5 { font-size: ${rem(24)}; }
  h6 { font-size: ${rem(21)}; }
  p {
    padding: 0;
    margin: ${rem(30)} 0;
  }
  strong { font-weight: 700; }

  input[type="text"], input[type="email"], input[type="search"], input[type="password"], input[type="tel"], input[type="address"], input[type="number"], textarea {
    position: relative;
    padding: 0 ${rem(30)};
    display: block;
    width: 100%;
    height: ${rem(60)};
    font-size: ${rem(16)};
    font-family: var(--f-primary);
    color: var(--c-font);
    resize: none;
    outline: 0;
    font-weight: 400;
    background: var(--c-background3);
    border: ${rem(2)} solid var(--c-lineBorder);
    border-radius: ${rem(30)};
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
  }
  textarea {
    height: ${rem(140)};
    padding-top: ${rem(20)};
    padding-bottom: ${rem(20)};
    resize: none;
  }
  label,
  legend {
    display: block;
    padding-bottom: ${rem(20)};
    font-size: ${rem(20)};
  }
  fieldset {
    border-width: 0;
    padding: 0;
  }
  input[type="checkbox"], input[type="radio"] {
    display: inline;
  }
  label.error {
    padding-top: ${rem(5)};
    font-size: ${rem(14)};
    color: red;
    display: none;
  }

  ul {
    list-style: disc;
    margin-top: ${rem(30)};
    margin-bottom: ${rem(30)};
    padding-left: 0;
    list-style-position: inside;
  }
  ol {
    list-style: decimal;
    margin-top: ${rem(30)};
    margin-bottom: ${rem(30)};
    padding-left: 0;
    list-style-position: inside;
  }
  ul ul, ol ol, ul ol, ol ul {
    margin-top: ${rem(15)};
    margin-bottom: ${rem(15)};
    margin-left: ${rem(15)};
  }

  code {
    padding: 0 ${rem(4)};
    font-size: ${rem(14)};
    font-style: italic;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    overflow: auto;
    max-width: 100%;
    white-space: nowrap;
  }

  pre {
    margin: ${rem(30)} 0;
    padding: 0;
    max-width: 100%;
    overflow: auto;
    white-space: pre;
    font-size: ${rem(14)};
  }

  mark, ins {
    text-decoration: none;
  }

  dt {
    margin-bottom: ${rem(5)};
    font-weight: 700;
  }

  dd {
    margin-top: 0;
    margin-bottom: ${rem(30)};
    margin-left: ${rem(30)};
  }
`;

export default GlobalStyles;
