import { styled } from 'styled-components'
import { rem, colors } from 'components/GlobalStyle'
import type { Props } from './Nav'

const StyledNav = styled('nav')<Partial<Props>>`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 12px;

      a {
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
`

export default StyledNav
