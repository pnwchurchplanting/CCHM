import { styled } from 'styled-components'
import type { Props } from './Container'
import { rem } from 'components/GlobalStyle'

const StyledContainer = styled('div')<Partial<Props>>`
  flex: 1;
  margin: 0 auto;
  max-width: ${rem(1200)};
  padding: 0 ${rem(24)};

  // style props
  ${({ $fullWidth }) => $fullWidth && `max-width: 90vw;`}
  ${({ $isNarrow }) => $isNarrow && `max-width: ${rem(768)};`}
`

export default StyledContainer
