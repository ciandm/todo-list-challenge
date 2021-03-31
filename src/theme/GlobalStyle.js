import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Inter', sans-serif;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: ${({ theme }) =>
      theme.darkMode ? theme.colors.haiti : theme.colors.purpleGray};
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyle;
