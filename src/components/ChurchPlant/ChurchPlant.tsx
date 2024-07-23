import React from 'react'
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
  return (
    <StyledChurchPlant className={className}>
      <div>
        <img
          src={image || 'https://placehold.co/700x525?text=Coming Soon'}
          alt={name}
        />
      </div>
      <div>
        {logo && <img src={logo} alt={`${name} logo`} height={80} />}
        <h2>{name}</h2>
        <p>{location}</p>
        <p>{description}</p>
        <p>
          <a href={link}>{linkText || link}</a>
        </p>
      </div>
    </StyledChurchPlant>
  )
}

export default ChurchPlant
