import { createGlobalStyle } from 'styled-components'
import { purple, purpleDark, white } from '../styles/colors'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background-color: ${white};
  }

  button {
    padding: 10px;
    background-color: ${purple};
    border-radius: 2em;
    border: none;
    color: white;

    &:focus {
      outline: none;
    }

    &:active {
      background-color: ${purpleDark};
    }
  }
  
  ._loading_overlay_overlay {
    background-color: #000 !important;
  }
`
