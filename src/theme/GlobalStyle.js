import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@500;700&display=swap');

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

  
  html {
    font-size: 62.5%; 
  }

body{
  padding-left: 120px;
 font-family: 'Muli', sans-serif;
  font-size: 1.6rem;

}`;

export default GlobalStyle;
