import React from 'react'
import { Link } from 'gatsby'
import StyledNav from './Nav.style'

export interface Props {
  className?: string
}

const Nav = ({ className = '' }: Props) => {
  return (
    <StyledNav className={className}>
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
    </StyledNav>
  )
}

export default Nav
