import { createGlobalStyle } from 'styled-components'
import {
  $white
} from './colors'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  html{
    margin: 0 auto;
    max-width: 1600px;
  }
  
  body{
    background-color: rgba(13,13,13, .85);
    color: ${$white};
  }
`
