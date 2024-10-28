import { styled } from 'styled-components'
import type { Props } from './ChurchPlant'
import { rem, mq } from 'components/GlobalStyle'

const StyledChurchPlant = styled('div')<Partial<Props>>`
  @media ${mq.isBeforeDesktop} {
    max-width: ${rem(680)};
    margin: 4rem auto;
  }

  @media ${mq.isDesktop} {
    display: none;
    display: flex;
    grid-gap: 2rem;
    margin: 4rem 0;

    > div {
      flex: 1;
    }
  }

  .title {
    font-size: ${rem(24)};
    margin-bottom: ${rem(8)};
  }
  .location {
    margin-top: 0;
  }
  .content {
    font-size: ${rem(16)};
  }
`

export default StyledChurchPlant
