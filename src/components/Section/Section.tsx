import React from 'react'
import Container from 'components/Container'
import StyledSection from './Section.style'

export interface Props {
  className?: string
  children: React.ReactNode
  $isNarrow?: boolean
  $isShort?: boolean
}

const Section = ({
  className = '',
  children,
  $isNarrow = false,
  $isShort = false,
}: Props) => {
  return (
    <StyledSection className={className} $isShort={$isShort}>
      <Container $isNarrow={$isNarrow}>{children}</Container>
    </StyledSection>
  )
}

export default Section
