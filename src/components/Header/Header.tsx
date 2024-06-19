import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import Nav from 'components/Nav'
import Logo from 'components/Logo'

const Header = () => {
  const { title } = useSiteMetadata()
  const what = useSiteMetadata()
  console.log('what: ', what)

  return (
    <header className="header">
      <div className="branding">
        <Link to="/" className="branding-link">
          <Logo size="300" />
          <p className="visually-hidden">{title}</p>
        </Link>
      </div>
      <Nav />
    </header>
  )
}

export default Header
