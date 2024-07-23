import React from 'react'
import Container from 'components/Container'
import StyledFooter from './Footer.style'

export interface Props {
  className?: string
}

const Footer = ({ className = '' }: Props) => {
  return (
    <StyledFooter className={className}>
      <Container>
        <p>
          <small>&copy; 2024 | The Classical Committee on Home Missions</small>
        </p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
