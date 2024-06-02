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

  .header {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between
  }

  .footer {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #686868;
  }

  .branding {
    /* background-color: red; */
  }

  .logo {
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.75rem;
    
    a, a:hover, a:focus, a:active {
      color: #1f1f1f;
      border: none;
      transition: none;
    }
  }

  .nav {
    ul {
      display: flex;

      li {
        margin-left: 1.5rem;
      }
    }
  }

  .content {
    min-height: 75vh;
  }
  
  .section {
    min-height: 80vh;
  }
`

export default GlobalStyle
