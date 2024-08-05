import { styled } from 'styled-components'
import type { Props } from './Section'
import { mixins } from 'components/GlobalStyle'

const StyledSection = styled('section')<Partial<Props>>`
  display: flex;
  min-height: 80vh;

  .container {
    ${mixins.mod}
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

export default StyledSection
