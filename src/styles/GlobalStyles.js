import { createGlobalStyle } from 'styled-components';

import { reset } from './Reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.font};
    transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  }
`;

export default GlobalStyles;
