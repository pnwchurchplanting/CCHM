import * as React from 'react'
import type { PageProps } from 'gatsby'
// import { useStaticQuery, graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import ChurchPlant from 'components/ChurchPlant'
import Section from 'components/Section'
import Container from 'components/Container'

const ChurchPlantsPage: React.FC<PageProps> = () => {
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
        className="splash splash--light"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/thw99qcq417p/1NR0vddLLlJ4Kim3m0mTKC/f7df93eae9f7b3e0def1225c753ecf8b/Map2.jpg)`,
        }}
      >
        <Section $isShort>
          <h1>Current Church Plants</h1>
        </Section>
      </div>
      <Section>
        <ChurchPlant
          name="Central Oregon Joint Venture"
          location="Redmond, OR"
          description="The PNW Committee on Home Missions was approached by several families living in Central Oregon about the possibility of beginning a new URC congregation in their community. In the summer of 2025 the Consistory of Grace URC (Portland, OR) formally agreed to oversee these families and take the next steps in planting a church in Central Oregon. This new work is supported by the wisdom of a Joint Venture Committee which is made up of several congregations within Classis PNW."
          image="https://placehold.co/580x387?text=Coming+Soon"
        />
        <ChurchPlant
          name="Big Springs Community Church"
          location="Big Springs, CA"
          description={`We proclaim the historic ancient and Protestant Reformation faith, "the faith that was once for all delivered to the saints," in the Yreka-Weed areas in Northern California. Please continue browsing, our church might just be what you're looking for!`}
          image="https://www.bigspringsurc.com/wp-content/uploads/2014/10/IMG_0558-1002x1024.jpg"
          logo="https://www.bigspringsurc.com/wp-content/uploads/2021/02/cropped-cropped-bscc-logo-red-blue2.jpg"
          link="https://www.bigspringsurc.com"
          linkText="bigspringsurc.com"
        />
      </Section>

      <Container>
        <hr />
      </Container>

      <Section>
        <h2>Recent Church Plants</h2>
        <p>
          Church plants fulfill Jesus&rsquo; commission to &ldquo;make disciples
          of all nations&rdquo; (Matt 28:19) under the authority of elders from
          an established URCNA congregation. As God provides growth (1 Cor
          3:6-7), a church plant should transition into an organized church.
          This means the church plant can function independently, with its own
          elders overseeing the congregation and also achieving financial
          self-sufficiency. Several former church plants in the Pacific
          Northwest have organized as official URCNA congregations.
        </p>

        <div className="section--inner">
          <ChurchPlant
            name="Peace United Reformed Church"
            location="Vancouver, WA"
            description="Peace United Reformed Church is a Church Plant of Grace United Reformed Church in Portland, OR and members of the United Reformed Churches in North America. Learn more about the Mission and Vision of Peace URC below."
            image="https://peaceurc.com/wp-content/uploads/2023/07/peace7-23-1.jpg"
            logo="https://peaceurc.com/wp-content/uploads/2019/10/Horizontal-1-1.png"
            link="https://peaceurc.com"
            linkText="peaceurc.com"
          />
          <ChurchPlant
            name="Providence Reformed Church"
            location="Meridian, Idaho"
            description="Providence Reformed Church is a church plant of Christ Reformed Church in Nampa, Idaho. We are happy to provide a new home for Christian worship in the heart of Meridian, Idaho, just outside of Boise."
            image="https://images.ctfassets.net/thw99qcq417p/2hP2bznIPhpdGmj7uwjwxp/9474ce52e845afffcac72dd3395138c0/Providence.jpeg"
            logo="https://www.providenceurc.org/wp-content/uploads/2023/03/providence-URC-meridian_logo.png"
            link="https://www.providenceurc.org"
            linkText="providenceurc.org"
          />
          <ChurchPlant
            name="Gig Harbor URC"
            location="Gig Harbor, WA"
            description={`We are a warm, confessional, and Reformed church located in Gig Harbor.`}
            image="https://images.ctfassets.net/thw99qcq417p/5fffNHlmGrBo2y5wrGCF0M/b1433404f7ac0e2720d6a3e9cc4d3547/gig-harbor.webp"
            logo="https://images.ctfassets.net/thw99qcq417p/2Gg6oUiQrSKQJTLk6CPubO/ae6a7496ffdf61f47f00f8cf27ddbeef/gig-harbor-logo.png"
            link="https://www.gigharborurc.org"
            linkText="gigharborurc.org"
          />
        </div>
      </Section>
    </Layout>
  )
}

export default ChurchPlantsPage

export const Head = () => <SEO pageTitle="Church Plants" />
