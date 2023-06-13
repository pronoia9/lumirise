import { createGlobalStyle } from 'styled-components';

import { reset } from './Reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.font};
  }
`;

export default GlobalStyles;
