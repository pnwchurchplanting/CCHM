import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { baseFontSize } from './constants'
import { vhc } from './mixins'
import { mq } from './mediaQueries'

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

  button {
    cursor: pointer;
  }

  /* TEMP */

  .section-title {
    margin-bottom: 4rem;
  }

  .splash {
    position: relative;
    background-size: cover;
    text-align: center;
    color: ${colors.white};
    background-position: center;
        
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color:rgba(0, 0, 0, 0.75);
      pointer-events: none;
    }

    .container {
      ${vhc}
    }

    h1 {
      font-size: calc(1.5rem + 1vw);
      max-width: 30ch;
      z-index: 1;

      @media ${mq.isDesktop} {
        font-size: calc(1.5rem + 1.5vw);
      }
    }
  }
`

export default GlobalStyle
