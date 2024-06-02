import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const ChurchPlantsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Church Plants</p>
    </Layout>
  )
}

export default ChurchPlantsPage

export const Head = () => <SEO pageTitle="Church Plants" />
