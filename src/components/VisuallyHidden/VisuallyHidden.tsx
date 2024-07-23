import React from 'react'
import StyledVisuallyHidden from './VisuallyHidden.style'

export interface Props {
  children: string
}

const VisuallyHidden = ({ children }: Props) => {
  return <StyledVisuallyHidden>{children}</StyledVisuallyHidden>
}

export default VisuallyHidden
