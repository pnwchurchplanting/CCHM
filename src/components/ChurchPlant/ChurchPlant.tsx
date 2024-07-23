import React from 'react'
import StyledChurchPlant from './ChurchPlant.style'

export interface Props {
  className?: string
}

const ChurchPlant = ({ className = '' }: Props) => {
  return (
    <StyledChurchPlant className={className}>
      <div>
        <img
          src="https://placehold.co/700x525?text=Church Photo"
          alt="placeholder"
        />
      </div>
      <div>
        <p>
          <img
            src="https://placehold.co/150x150?text=Church Logo"
            alt="placeholder"
          />
        </p>
        <h2>Providence Reformed Church</h2>
        <p>Meridian, Idaho</p>
        <p>
          Providence Reformed Church is a church plant of Christ Reformed Church
          in Nampa, Idaho. We are happy to provide a new home for Christian
          worship in the heart of Meridian, Idaho, just outside of Boise.
        </p>
        <p>
          <a href="https://www.providenceurc.org">providenceurc.org</a>
        </p>
      </div>
    </StyledChurchPlant>
  )
}

export default ChurchPlant
