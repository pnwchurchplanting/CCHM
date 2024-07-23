import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { baseFontSize } from './constants'

import 'normalize.css' // https://github.com/necolas/normalize.css

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${baseFontSize}px;
  }
  
  body {
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    background-color: #fff;
  }

  img,
  svg { 
    display: block;
    max-width: 100%;
  }

  a {
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  
  /*
    TEMP
  */
  .section {
    min-height: 80vh;
  }
`

export default GlobalStyle
