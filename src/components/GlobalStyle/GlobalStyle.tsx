import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { baseFontSize } from './constants'
import { vhc, mod } from './mixins'
import { mq } from './mediaQueries'
import rem from './pxToRem'

import 'normalize.css' // https://github.com/necolas/normalize.css

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${baseFontSize}px;
  }
  
  body {
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    background-color: #fff;
  }

  img,
  svg { 
    display: block;
    max-width: 100%;
  }

  a {
    color: blue;
    /* text-decoration: none; */

    &:hover {
      text-decoration: underline;
    }
  }

  a[target="_blank"]:after {
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==");
    margin: 0 3px 0 5px;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
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

  .media {
    ${mod}
    display: flex;
    align-items: center;
    grid-gap: 1.5rem;
    padding: 1rem;
    border-radius: ${rem(4)};
    background-color: ${colors.green}25;

    img {
      border-radius: ${rem(3)};
    }
  }

  .label {
    color: ${colors.darkGreen};
    font-size: 16px;
  }

  .email {
    font-size: 1.5rem;
  }
`

export default GlobalStyle
