import * as React from 'react'
import type { PageProps } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const HealthcheckPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      allContentfulTest {
        edges {
          node {
            title
            splashImage {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const {
    title,
    splashImage: { gatsbyImageData },
  } = data.allContentfulTest.edges[0].node
  console.log(gatsbyImageData)

  return (
    <Layout>
      {title && <p>✅ {title}</p>}{' '}
      <GatsbyImage image={gatsbyImageData} alt="img" />
    </Layout>
  )
}

export default HealthcheckPage

export const Head = () => <SEO pageTitle="Healthcheck" />
