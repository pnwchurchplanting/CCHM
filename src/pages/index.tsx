import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="section">
        <p>Home Page</p>
      </section>
      <section className="section">
        <p>About Us</p>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />
