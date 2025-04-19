import { createGlobalStyle } from "styled-components"

 const GlobalStyle = createGlobalStyle`
  * {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  margin: 5px 0;
  }

  body {
    margin: 0;
    margin-left: 20rem;
 }
  button {
  background-color: #7e1587;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  }

  button:hover {
  background-color: #8a2c93;
  }
  
  input {
    margin-right: 15px;
    padding: 10px 15px;
    border-radius: 5px;
    background: transparent;
    border: 1px solid #7e1587;
    outline: none;
  }

`;
export default GlobalStyle;

