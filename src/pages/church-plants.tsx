import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const ChurchPlantsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="church-plant-heading">
        Reformed Church Planting PWC currently supports __ church plants.
      </h1>
      <div className="church-plant">
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
            Providence Reformed Church is a church plant of Christ Reformed
            Church in Nampa, Idaho. We are happy to provide a new home for
            Christian worship in the heart of Meridian, Idaho, just outside of
            Boise.
          </p>
          <p>
            <a href="https://www.providenceurc.org">providenceurc.org</a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ChurchPlantsPage

export const Head = () => <SEO pageTitle="Church Plants" />
