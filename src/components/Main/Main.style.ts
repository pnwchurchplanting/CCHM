import { styled } from 'styled-components'
import type { Props } from './Main'

const StyledMain = styled('main')<Partial<Props>>`
  min-height: 75vh;
`

export default StyledMain
