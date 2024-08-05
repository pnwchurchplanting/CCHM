import { styled } from 'styled-components'
import { rem } from 'components/GlobalStyle'
import type { Props } from './Header'

const StyledHeader = styled('header')<Partial<Props>>`
  .container {
    height: ${({ $isDesktop }) => ($isDesktop ? rem(120) : rem(80))};
    display: flex;
    align-items: center;
    justify-content: ${({ $isDesktop }) =>
      $isDesktop ? 'space-between' : 'center'};
  }

  .branding {
    ${({ $isDesktop }) =>
      $isDesktop
        ? ''
        : `
      position: relative;
      top: ${rem(5)};
      background: #fff;
      border-radius: 100%;
      z-index: 999;
    `};

    .branding-link {
      display: block;
      border: none;
      transition: none;
    }
  }
`

export default StyledHeader
