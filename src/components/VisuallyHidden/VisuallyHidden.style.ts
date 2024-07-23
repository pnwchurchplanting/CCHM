import { styled } from 'styled-components'
import type { Props } from './VisuallyHidden'

const StyledVisuallyHidden = styled('span')<Partial<Props>>`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export default StyledVisuallyHidden
