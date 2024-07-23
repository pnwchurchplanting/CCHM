import React from 'react'
import GlobalStyle from 'components/GlobalStyle'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
