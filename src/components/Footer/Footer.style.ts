import { styled } from 'styled-components'
import type { Props } from './Footer'

const StyledFooter = styled('footer')<Partial<Props>>`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #686868;
`

export default StyledFooter
