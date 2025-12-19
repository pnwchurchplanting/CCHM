import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { LuMenu, LuX } from 'react-icons/lu'
import { mq } from 'components/GlobalStyle'
import StyledNav from './Nav.style'

export interface Props {
  className?: string
  $isDesktop?: boolean
  $isOpen?: boolean
}

const Nav = ({ className = '' }: Props) => {
  const isDesktop = useMediaQuery({
    query: mq.isDesktop,
  })

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const ACTIVE_CLASS_NAME = 'active'

  return (
    <StyledNav className={className} $isDesktop={isDesktop} $isOpen={isOpen}>
      <button className="mobile-nav-button" onClick={handleClick}>
        {isOpen ? <LuX /> : <LuMenu />}
      </button>
      <nav>
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
            <Link to="/guidelines" activeClassName={ACTIVE_CLASS_NAME}>
              Guidelines
            </Link>
          </li>
          <li>
            <Link to="/contact-us" activeClassName={ACTIVE_CLASS_NAME}>
              Contact Us
            </Link>
          </li>
          {/* <li>
            <Link to="/giving" activeClassName={ACTIVE_CLASS_NAME}>
              Giving
            </Link>
          </li> */}
        </ul>
      </nav>
    </StyledNav>
  )
}

export default Nav
