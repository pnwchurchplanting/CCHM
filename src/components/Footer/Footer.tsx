import React from 'react'
import StyledFooter from './Footer.style'

export interface Props {
  className?: string
}

const Footer = ({ className = '' }: Props) => {
  return (
    <StyledFooter className={className}>
      <p>
        <small>&copy; 2024 | The Classical Committee on Home Missions</small>
      </p>
    </StyledFooter>
  )
}

export default Footer
