import React from 'react'
import StyledMain from './Main.style'

export interface Props {
  className?: string
  children?: React.ReactNode
}

const Main = ({ className = '', children }: Props) => {
  return <StyledMain className={className}>{children}</StyledMain>
}

export default Main
