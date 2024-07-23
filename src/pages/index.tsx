import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="section">
        <h1>
          Reformed Church Planting PNW is the home for planting a new URCNA
          church in the Pacific Northwest region. This site is maintained by the
          Classical Committee on Home Missions, PNW.
        </h1>
      </section>
      <section className="section">
        <h1>About Us</h1>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />
