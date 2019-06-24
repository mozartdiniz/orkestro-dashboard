import { createGlobalStyle } from 'styled-components';
import { DEFAULT_FONT_SIZE, FONT_FAMILY } from './consts/styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${DEFAULT_FONT_SIZE};
    font-family: ${FONT_FAMILY};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
