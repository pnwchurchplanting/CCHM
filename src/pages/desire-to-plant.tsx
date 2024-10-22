import * as React from 'react'
import type { PageProps } from 'gatsby'
// import { useStaticQuery, graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Section from 'components/Section'

const DesireToPlantPage: React.FC<PageProps> = () => {
  // const data = useStaticQuery(graphql`
  //   query PageQuery {
  //     allContentfulTest {
  //       edges {
  //         node {
  //           title
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { title } = data.allContentfulTest.edges[0].node

  return (
    <Layout>
      <div
        className="splash"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/thw99qcq417p/4w5blxepB6UIEVbWzrqAaC/e6647b4b38a980e80be5fe1ea75d05e5/pnw-bg.jpeg?w=3000&h=2000&fl=progressive&q=50&fm=jpg)`,
        }}
      >
        <Section $isShort>
          <h1>Desire To Plant?</h1>
        </Section>
      </div>
      <Section $isNarrow>
        <p>
          Are you living in an area without a Reformed church? Do you wish to
          see one established in your community? Perhaps you&rsquo;re part of a
          Bible study group interested in planting a Reformed church? Or maybe
          you're an aspiring church planter drawn to the beautiful Pacific
          Northwest?
        </p>

        <p>
          If any of these scenarios resonate with you, we&rsquo;d love to
          connect! If you&rsquo;d like more information on the process of
          planting a Reformed congregation, please{' '}
          <a
            href="https://www.urcna.org/urcna/missions/churchplantingmanual/how%20to%20plant%20a%20reformed%20church.pdf"
            target="_blank"
          >
            see the Church Planting Manual
          </a>
          . This will acquaint you with the general approach we take to
          establishing new churches, from the beginning of the process to the
          end.
        </p>
      </Section>
    </Layout>
  )
}

export default DesireToPlantPage

export const Head = () => <SEO pageTitle="Desire to Plant?" />
