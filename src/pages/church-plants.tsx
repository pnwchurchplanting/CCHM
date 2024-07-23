import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import ChurchPlant from 'components/ChurchPlant'

const ChurchPlantsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="church-plant-heading">
        Reformed Church Planting PWC currently supports __ church plants.
      </h1>
      <ChurchPlant />
    </Layout>
  )
}

export default ChurchPlantsPage

export const Head = () => <SEO pageTitle="Church Plants" />
