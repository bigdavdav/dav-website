import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
    font-family: 'Libre Bodoni', sans-serif;
  }

  body {
    background: ${props => props.theme["gray-900"]};
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  a {
    font-size: 2.25rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.4;
  }

  p + p {
    margin-top: 2rem;
  }

  span {
    font-size: 1rem;
  }
`