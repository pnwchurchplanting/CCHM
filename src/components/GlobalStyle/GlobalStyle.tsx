import { createGlobalStyle } from 'styled-components'
import { baseFontSize } from './constants'

import 'normalize.css' // https://github.com/necolas/normalize.css

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${baseFontSize}px;
    font-family: sans-serif;
  }
  
  body {
    background-color: #fff;
  }

  img,
  svg { 
    display: block;
    max-width: 100%;
  }
  
  /*
    TEMP
  */
  .section {
    min-height: 80vh;
  }

  .church-plant-heading {
    margin: 2rem 0;
  }
`

export default GlobalStyle
