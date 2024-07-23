import React from 'react'
import StyledHeader from './Header.style'
import { Link } from 'gatsby'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import Nav from 'components/Nav'
import Logo from 'components/Logo'
import VisuallyHidden from 'components/VisuallyHidden'

export interface Props {
  className?: string
}

const Header = ({ className = '' }: Props) => {
  const { title } = useSiteMetadata()
  const what = useSiteMetadata()
  console.log('what: ', what)

  return (
    <StyledHeader className={className}>
      <div className="branding">
        <Link to="/" className="branding-link">
          <Logo size="300" />
          <VisuallyHidden>{title}</VisuallyHidden>
        </Link>
      </div>
      <Nav />
    </StyledHeader>
  )
}

export default Header
