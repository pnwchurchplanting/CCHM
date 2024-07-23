import { createGlobalStyle } from 'styled-components'

import 'the-new-css-reset/css/reset.css' // https://github.com/elad2412/the-new-css-reset
import 'typography-baseline.css' // https://github.com/paceaux/typography-baseline

// const pageStyles = {
//   color: '#232129',
//   padding: 64,
//   // fontFamily: '-apple-system, Roboto, sans-serif, serif',
//   fontFamily:
//     // 'Superclarendon, Bookman Old Style, URW Bookman, URW Bookman L, Georgia Pro, Georgia, serif',
//     'Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif',
// }

// --baseFontFamily: Georgia, 'Times New Roman', serif;
// --titleFontFamily: Helvetica, Arial, sans-serif;
// --codeFontFamily: monospace;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    max-width: 60rem;
    background-color: #fff;
  }

  svg { 
    display: block;
  }
  
  .section {
    min-height: 80vh;
  }

  .church-plant-heading {
    margin: 2rem 0;
  }

  /* a11y */
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

export default GlobalStyle
