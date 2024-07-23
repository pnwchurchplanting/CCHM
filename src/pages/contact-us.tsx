import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const ContactUsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Contact Us</h1>
    </Layout>
  )
}

export default ContactUsPage

export const Head = () => <SEO pageTitle="Contact Us" />
