import * as React from 'react'
import type { PageProps } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Section from 'components/Section'

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      allContentfulTest {
        edges {
          node {
            title
            splashImage {
              url
            }
          }
        }
      }
    }
  `)

  const { title, splashImage } = data.allContentfulTest.edges[0].node

  return (
    <Layout>
      <div
        className="splash"
        style={{
          backgroundImage: `url(${splashImage.gatsbyImageData.images.fallback.src})`,
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
