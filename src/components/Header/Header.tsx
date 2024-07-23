import React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import Nav from 'components/Nav'
import Logo, { LogoSmall } from 'components/Logo'
import VisuallyHidden from 'components/VisuallyHidden'
import Container from 'components/Container'
import StyledHeader from './Header.style'

export interface Props {
  className?: string
}

const Header = ({ className = '' }: Props) => {
  const { title } = useSiteMetadata()
  const siteMetaData = useSiteMetadata()
  console.log('siteMetaData: ', siteMetaData)

  const isDesktop = useMediaQuery({
    query: '(min-width: 1023px)',
  })

  return (
    <StyledHeader className={className}>
      <Container>
        <div className="branding">
          <Link to="/" className="branding-link">
            {isDesktop ? <Logo size="260" /> : <LogoSmall size="120" />}
            <VisuallyHidden>{title}</VisuallyHidden>
          </Link>
        </div>
        <Nav />
      </Container>
    </StyledHeader>
  )
}

export default Header
