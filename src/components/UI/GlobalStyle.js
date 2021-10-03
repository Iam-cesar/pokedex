import { createGlobalStyle } from 'styled-components'
import {
  $black,
  $white
} from './colors'

export const GlobalStyle = createGlobalStyle`
  *{
    background-color: ${$black};
    box-sizing: border-box;
    color: ${$white};
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }
`
