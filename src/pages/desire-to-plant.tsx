import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const DesireToPlantPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Desire To Plant</p>
    </Layout>
  )
}

export default DesireToPlantPage

export const Head = () => <SEO pageTitle="Desire to Plant?" />
