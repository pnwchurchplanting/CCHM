import React from 'react'
import clsx from 'clsx'
import StyledContainer from './Container.style'

export interface Props {
  className?: string
  children: React.ReactNode
  $fullWidth?: boolean
  $isNarrow?: boolean
}

const Container = ({
  className = '',
  children,
  $fullWidth = false,
  $isNarrow = false,
}: Props) => {
  return (
    <StyledContainer
      className={clsx('container', [className])}
      $fullWidth={$fullWidth}
      $isNarrow={$isNarrow}
    >
      {children}
    </StyledContainer>
  )
}

export default Container
