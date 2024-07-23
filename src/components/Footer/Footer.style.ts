import { styled } from 'styled-components'
import { rem, colors } from 'components/GlobalStyle'
import type { Props } from './Footer'

const StyledFooter = styled('footer')<Partial<Props>>`
  height: ${rem(80)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.lightBlack};
`

export default StyledFooter
