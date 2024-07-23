import React from 'react'
import { Link } from 'gatsby'
import StyledNav from './Nav.style'

export interface Props {
  className?: string
}

const Nav = ({ className = '' }: Props) => {
  const ACTIVE_CLASS_NAME = 'active'

  return (
    <StyledNav className={className}>
      <ul>
        <li>
          <Link to="/church-plants" activeClassName={ACTIVE_CLASS_NAME}>
            Church Plants
          </Link>
        </li>
        <li>
          <Link to="/desire-to-plant" activeClassName={ACTIVE_CLASS_NAME}>
            Desire to Plant?
          </Link>
        </li>
        <li>
          <Link to="/contact-us" activeClassName={ACTIVE_CLASS_NAME}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/giving" activeClassName={ACTIVE_CLASS_NAME}>
            Giving
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
