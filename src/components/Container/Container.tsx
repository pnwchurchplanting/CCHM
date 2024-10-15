import React from 'react'
import clsx from 'clsx'
import StyledContainer from './Container.style'

export interface Props {
  className?: string
  children: React.ReactNode
  $fullWidth?: boolean
}

const Container = ({ className = '', children, $fullWidth = false }: Props) => {
  return (
    <StyledContainer
      className={clsx('container', [className])}
      $fullWidth={$fullWidth}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
