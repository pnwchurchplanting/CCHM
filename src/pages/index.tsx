import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const pageStyles = {
  color: '#232129',
  padding: 64,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
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

  return (
    <main style={pageStyles}>
      <h1>The Classical Committee on Home Missions</h1>
      {title && <p>✅ {title}</p>}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <title>CCHM: The Classical Committee on Home Missions</title>
)
