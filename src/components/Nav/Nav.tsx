import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/church-plants">Church Plants</Link>
        </li>
        <li>
          <Link to="/desire-to-plant">Desire to Plant?</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/giving">Giving</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
