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
      <Section $isNarrow>
        <h1>About PNW Church Planting</h1>
        <p>
          Until Christ returns, His church must continue planting new
          congregations where few or none exist. PNW Church Planting, out of
          obedience to Christ, promotes the establishment of new congregations
          in the Pacific Northwest.
        </p>

        <p>
          We specifically assist churches and interested groups in planting
          congregations committed to{' '}
          <a href="https://threeforms.org" target="_blank">
            the Reformed Confessions
          </a>
          .
        </p>

        <p>
          The Classical Committee on Home Missions (PNW) of the{' '}
          <a href="https://www.urcna.org/pacificnorthwest" target="_blank">
            United Reformed Churches in North America
          </a>
          , maintains this site. If you're interested in planting a Reformed
          congregation in your area, please{' '}
          <a href="/contact-us">contact the Committee</a>.
        </p>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />
