import { styled } from 'styled-components'
import type { Props } from './Nav'

const StyledNav = styled('nav')<Partial<Props>>`
  ul {
    display: flex;

    li {
      margin-left: 1.5rem;
    }
  }
`

export default StyledNav
