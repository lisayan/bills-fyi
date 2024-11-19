import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

  :root {
    --color-primary: #7013C4;
    --color-secondary: #C68BFD;
    --color-tertiary: #D8EAD6;
    --color-quaternary: #72727E;
    --color-quinary: #625F63;
    --color-icon-green: #9FC2A0;
    --font-family: 'Poppins', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  body, html {
    font-family: var(--font-family);
    background-color: #FFFFFF;
    color: var(--color-primary);
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family);
    font-weight: 400;
    color: var(--color-quaternary);
  }

  a {
    font-family: var(--font-family);
    color: var(--color-secondary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: var(--font-family);
    background-color: var(--color-primary);
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: var(--color-secondary);
    }
  }

  .container {
    background-color: var(--color-tertiary);
    padding: 20px;
    border-radius: 5px;
  }

  input[type="text"], input[type="email"], textarea {
    font-family: var(--font-family);
    border: 1px solid var(--color-quaternary);
    padding: 10px;
    border-radius: 3px;
    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }

  .card {
    background-color: #FFFFFF;
    border: 1px solid var(--color-quinary);
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  /* Ensure Montserrat is applied to all elements */
  div, span, p, a, button, input, select, textarea {
    font-family: var(--font-family);
  }

  /* Apply font to Home.jsx */
  #root {
    font-family: var(--font-family);
  }
`;

export default GlobalStyle;