import * as React from 'react'
import type { PageProps } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Section from 'components/Section'

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      allContentfulSplash {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  const { title } = data.allContentfulSplash.edges[0].node

  return (
    <Layout>
      <div
        className="splash"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/thw99qcq417p/4w5blxepB6UIEVbWzrqAaC/e6647b4b38a980e80be5fe1ea75d05e5/pnw-bg.jpeg?w=3000&h=2000&fl=progressive&q=50&fm=jpg)`,
        }}
      >
        <Section>
          <h1>{title}</h1>
        </Section>
      </div>
      <Section>
        <h1>About Us</h1>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />
