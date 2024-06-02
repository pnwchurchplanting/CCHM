import React from 'react'
import Nav from 'components/Nav'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className="header">
      <div className="branding">
        <h1 className="logo">
          <Link to="/">PNW Church Planting</Link>
        </h1>
      </div>
      <Nav />
    </header>
  )
}

export default Header
