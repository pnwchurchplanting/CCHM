import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const ContactUsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Contact Us</p>
    </Layout>
  )
}

export default ContactUsPage

export const Head = () => <SEO pageTitle="Contact Us" />
