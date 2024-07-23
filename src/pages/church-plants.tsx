import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import ChurchPlant from 'components/ChurchPlant'

const ChurchPlantsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Church Plants</h1>
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
        image="https://www.providenceurc.org/wp-content/uploads/2023/03/providence-urc_meridian-idaho-1024x768.jpg"
        logo="https://www.providenceurc.org/wp-content/uploads/2023/03/providence-URC-meridian_logo.png"
        link="https://www.providenceurc.org"
        linkText="providenceurc.org"
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
      <ChurchPlant
        name="Ripon Reformed Fellowship"
        location="Ripon, CA"
        description="A newly planted reformed church plant in Ripon, California. This work is overseen by Trinity URC in Walnut Creek."
      />
    </Layout>
  )
}

export default ChurchPlantsPage

export const Head = () => <SEO pageTitle="Church Plants" />
