import React from 'react'
import Container from 'components/Container'
import StyledSection from './Section.style'

export interface Props {
  className?: string
  children: React.ReactNode
}

const Section = ({ className = '', children }: Props) => {
  return (
    <StyledSection className={className}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
