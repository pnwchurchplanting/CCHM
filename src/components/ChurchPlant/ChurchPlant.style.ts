import { styled } from 'styled-components'
import type { Props } from './ChurchPlant'

const StyledChurchPlant = styled('div')<Partial<Props>>`
  display: flex;
  grid-gap: 2rem;
  margin: 4rem 0;

  > div {
    flex: 1;
  }
`

export default StyledChurchPlant
