import { styled } from 'styled-components'
import type { Props } from './Section'
import { mixins, mq } from 'components/GlobalStyle'

const StyledSection = styled('section')<Partial<Props>>`
  display: flex;
  min-height: 60vh;

  // style props
  ${({ $isShort }) => $isShort && `min-height: 30vh;`}

  @media ${mq.isDesktop} {
    min-height: 80vh;

    // style props
    ${({ $isShort }) => $isShort && `min-height: 40vh;`}
  }

  .container {
    ${mixins.mod}
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

export default StyledSection
