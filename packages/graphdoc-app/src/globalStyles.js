import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', Helvetica, Sans-Serif;
    min-height: 100vh;
  }

  div#app {
    min-height: 100vh;
  }
`;
 
export default GlobalStyle;