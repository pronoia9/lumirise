import { createGlobalStyle } from 'styled-components';

import { resetCSS } from './ResetCSS';
import { swiperCSS } from './SwiperCSS';

const GlobalStyles = createGlobalStyle`
  ${resetCSS}
  ${swiperCSS}
  
  @font-face { font-family: 'Caveat'; src: url('/fonts/Caveat/Caveat-VariableFont_wght.ttf'); }
  @font-face { font-family: 'Caveat Brush'; src: url('/fonts/Caveat_Brush/CaveatBrush-Regular.ttf'); }
  @font-face { font-family: 'Jost'; src: url('/fonts/Jost/Jost-VariableFont_wght.ttf'); }

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
    --f-primary: 'Jost';
    --f-secondary: 'Caveat';
    --f-tertiary: 'Caveat Brush';
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
    font-size: 16px;
    font-family: var(--f-primary), sans-serif;
    font-weight: 400;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }

  body, #root {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    color: var(--c-font);
    background: var(--c-background);
    overflow-x: hidden;
    transition: background 0.5s ease-in-out, 
                color 0.5s ease-in-out;
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
    
    &:link, &:active { color: var(--c-accent); }
    /* &:visited { color: var(--c-accent); } */
    &:hover { text-decoration: underline; }
    
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
    margin-bottom: 15px;
    color: #000;
    font-weight: 700;
    line-height: 1.3;
  }
  h1 {
    font-size: 44px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  h2 {
    font-size: 41px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  h3 { font-size: 38px; }
  h4 { font-size: 32px; }
  h5 { font-size: 24px; }
  h6 { font-size: 21px; }
  p {
    padding: 0;
    margin: 30px 0;
  }
  strong { font-weight: 700; }

  input[type="text"], input[type="email"], input[type="search"], input[type="password"], input[type="tel"], input[type="address"], input[type="number"], textarea {
    position: relative;
    padding: 0 30px;
    display: block;
    width: 100%;
    height: 60px;
    font-size: 16px;
    color: #000;
    resize: none;
    outline: 0;
    font-weight: 400;
    background: #fff;
    border: 2px solid #000;
    border-radius: 30px;
    -webkit-border-radius: 30px;
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
  }
  textarea {
    height: 140px;
    padding-top: 20px;
    padding-bottom: 20px;
    resize: none;
  }
  label,
  legend {
    display: block;
    padding-bottom: 20px;
    font-size: 20px;
  }
  fieldset {
    border-width: 0;
    padding: 0;
  }
  input[type="checkbox"], input[type="radio"] {
    display: inline;
  }
  label.error {
    padding-top: 5px;
    font-size: 14px;
    color: red;
    display: none;
  }

  ul {
    list-style: disc;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 0px;
    list-style-position: inside;
  }
  ol {
    list-style: decimal;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 0px;
    list-style-position: inside;
  }
  ul ul, ol ol, ul ol, ol ul {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
  }

  code {
    padding: 0 4px;
    font-size: 14px;
    font-style: italic;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    overflow: auto;
    max-width: 100%;
    white-space: nowrap;
  }

  pre {
    margin: 30px 0;
    padding: 0;
    max-width: 100%;
    overflow: auto;
    white-space: pre;
    font-size: 14px;
  }

  mark, ins {
    text-decoration: none;
  }

  dt {
    margin-bottom: 5px;
    font-weight: 700;
  }

  dd {
    margin-top: 0;
    margin-bottom: 30px;
    margin-left: 30px;
  }
`;

export default GlobalStyles;
