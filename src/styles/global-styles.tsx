import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
  box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.white};
    color: white;
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`;

export { GlobalStyles };
