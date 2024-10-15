import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Section from 'components/Section'

const DesireToPlantPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section>
        <h1>Desire To Plant</h1>
      </Section>
    </Layout>
  )
}

export default DesireToPlantPage

export const Head = () => <SEO pageTitle="Desire to Plant?" />
