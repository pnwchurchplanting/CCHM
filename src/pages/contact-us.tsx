import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Section from 'components/Section'

const ContactUsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section>
        <h1>Contact Us</h1>
      </Section>
    </Layout>
  )
}

export default ContactUsPage

export const Head = () => <SEO pageTitle="Contact Us" />
