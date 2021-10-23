import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  
  margin: 0;
  padding: 0;
  list-style: none;

  input, button {
    box-sizing: border-box;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
  
    body {
      color: #ffffff;
      background-color: #e94c58;
      width: 100%;
      height: 100vh;
      font-family: 'Poppins';
    }
`
  