import { styled } from 'styled-components'
import type { Props } from './Header'

const StyledHeader = styled('header')<Partial<Props>>`
  .container {
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .branding {
    .branding-link {
      display: block;
      border: none;
      transition: none;
    }
  }
`

export default StyledHeader
