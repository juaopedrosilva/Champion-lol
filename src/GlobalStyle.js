import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,400i,600,700,900');
  *{
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box; 
  }
  body {
    background-color: #F6F6F6;
    color: #000; 
    font-family: 'Source Sans Pro', sans-serif;
  }
  a { 
    text-decoration: none;
}
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3); 
      border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3); 
  }
`
