import React, { useEffect } from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Section from 'components/Section'

const ContactUsPage: React.FC<PageProps> = () => {
  useEffect(() => {
    const email = 'aGVsbG9AcG53Y2h1cmNocGxhbnRpbmcub3Jn'
    const $el = document.getElementById('email')
    if ($el) {
      $el.innerHTML = atob(email)
      $el.setAttribute(
        'href',
        `mailto:${atob(
          email,
        )}?subject=I'm interested in planting a Reformed church in the Pacific Northwest`,
      )
    }
  })

  return (
    <Layout>
      <div
        className="splash"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/thw99qcq417p/4w5blxepB6UIEVbWzrqAaC/e6647b4b38a980e80be5fe1ea75d05e5/pnw-bg.jpeg?w=3000&h=2000&fl=progressive&q=50&fm=jpg)`,
        }}
      >
        <Section $isShort>
          <h1>Contact Us</h1>
        </Section>
      </div>
      <Section $isNarrow $isShort>
        <div className="media">
          <img
            src="https://images.ctfassets.net/thw99qcq417p/7IBqH4as4LwacHMDChB2Fw/8499c10ea0a5c0077f9e1e6bdd58c654/vanderpol.jpeg"
            alt="Pastor Mark Vander Pol"
            width={200}
            height={200}
          />
          <p>
            If you&rsquo;re interested in planting a Reformed church in the
            Pacific Northwest, start by contacting Pastor Mark Vander Pol. As
            the Chair of the Home Mission Committee and full-time Pastor of
            Congregational Life at{' '}
            <a href="https://www.lyndenurc.org" target="_blank">
              Lynden URC
            </a>
            , Pastor Mark is well-equipped to guide you through the process.
          </p>
        </div>

        <div className="section--inner">
          <p>
            <span className="label">Contact us at</span>
            <br />
            <a href="" id="email" className="email" />
          </p>
        </div>
      </Section>
    </Layout>
  )
}

export default ContactUsPage

export const Head = () => <SEO pageTitle="Contact Us" />
