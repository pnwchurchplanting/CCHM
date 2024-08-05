import { styled } from 'styled-components'
import { rem, colors, mixins } from 'components/GlobalStyle'
import type { Props } from './Nav'

const StyledNav = styled('nav')<Partial<Props>>`
  .mobile-nav-button {
    position: absolute;
    top: 0;
    right: 0;
    width: ${rem(80)};
    height: ${rem(80)};
    ${mixins.vhc}
    background: none;
    border: none;
    ${({ $isDesktop }) => ($isDesktop ? 'display: none' : '')};

    svg {
      font-size: ${rem(32)};
      color: ${colors.black};
    }
  }

  nav {
    ${({ $isDesktop, $isOpen }) =>
      $isDesktop
        ? ''
        : $isOpen
        ? `
    ${mixins.vc}
    position: absolute;
    top: ${rem(80)};
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: ${rem(32)} ${rem(16)};
    text-align: right;
    font-weight: bold;
    font-size: ${rem(32)};
    z-index: 999`
        : 'display: none'};

    ul {
      width: 100%;
      display: flex;
      flex-direction: ${({ $isDesktop }) => ($isDesktop ? 'row' : 'column')};
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-left: ${({ $isDesktop }) => ($isDesktop ? rem(16) : 0)};
        margin-bottom: ${({ $isDesktop }) => ($isDesktop ? 0 : rem(16))};

        a {
          display: block;
          text-decoration: none;
          color: #333;
          padding: ${rem(12)} ${rem(16)};
          border-radius: ${rem(8)};

          &:focus-visible,
          &:hover {
            background-color: ${colors.green}25;
          }

          &.active {
            color: #fff;
            background-color: ${colors.green};
          }
        }
      }
    }
  }
`

export default StyledNav
