import React from 'react'
import GlobalStyle from 'components/GlobalStyle'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main className="content">{children}</main>
    <Footer />
  </>
)

export default Layout
