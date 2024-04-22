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
    query HeaderQuery {
      contentfulBlogPost(id: { eq: "ee4b602d-58a5-559a-9354-b4ac87ead20a" }) {
        description {
          description
        }
      }
    }
  `)

  const { description } = data.contentfulBlogPost.description

  return (
    <main style={pageStyles}>
      <h1>The Classical Committee on Home Missions</h1>
      {description && (
        <p>✅ {data.contentfulBlogPost.description.description}</p>
      )}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <title>CCHM: The Classical Committee on Home Missions</title>
)
