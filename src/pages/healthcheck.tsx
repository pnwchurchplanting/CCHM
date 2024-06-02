import * as React from 'react'
import type { PageProps } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const HealthcheckPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      allContentfulTest {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  const { title } = data.allContentfulTest.edges[0].node

  return <Layout>{title && <p>✅ {title}</p>}</Layout>
}

export default HealthcheckPage

export const Head = () => <SEO pageTitle="Healthcheck" />
