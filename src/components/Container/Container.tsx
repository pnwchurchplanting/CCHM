import React from 'react'
import clsx from 'clsx'
import StyledContainer from './Container.style'

export interface Props {
  className?: string
  children: React.ReactNode
}

const Container = ({ className = '', children }: Props) => {
  return (
    <StyledContainer className={clsx('container', [className])}>
      {children}
    </StyledContainer>
  )
}

export default Container
