import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { mq } from 'components/GlobalStyle'
import StyledChurchPlant from './ChurchPlant.style'

export interface Props {
  className?: string
  name: string
  location: string
  description: string
  image?: string
  logo?: string
  link?: string
  linkText?: string
}

const ChurchPlant = ({
  className = '',
  name,
  location,
  description,
  image,
  logo,
  link,
  linkText,
}: Props) => {
  const isDesktop = useMediaQuery({
    query: mq.isDesktop,
  })

  return (
    <StyledChurchPlant className={className}>
      <div>
        <img
          src={image || 'https://placehold.co/700x525?text=Coming Soon'}
          alt={name}
        />
      </div>
      <div>
        {isDesktop && logo && (
          <img src={logo} alt={`${name} logo`} height={80} />
        )}
        <h2 className="title">{name}</h2>
        <div className="content">
          <p className="location">{location}</p>
          <p className="description">{description}</p>
          <p>
            <a href={link}>{linkText || link}</a>
          </p>
        </div>
      </div>
    </StyledChurchPlant>
  )
}

export default ChurchPlant
