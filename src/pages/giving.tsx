import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const GivingPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Giving</h1>
    </Layout>
  )
}

export default GivingPage

export const Head = () => <SEO pageTitle="Giving" />
