import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --black:lightgrey;
    --yellow: #ffc500;
    --white : #ffff;
  }

  body{
    background-color: var(--black);
  }
  html{
    font-size: 10px;
    color: var(--white);
   
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  
`;
export default GlobalStyles;
