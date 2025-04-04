import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./Header"
import { Gray } from "./themes/Gray"
import "./latout.css"

import { Main } from './Main'
import { Footer } from './Footer'

const Content = styled.div`
  margin: 0 auto;
  max-width: vat(--size-content);
  padding: var(--size-gutter);
`

const Footer = styled.footer`
  margin-top: var(--space-5);
  font-size: var(--font-sm);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

return (
  <ThemeProvider theme={Gray} >
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    <Content>
      <Main>{Children}</Main>
      <Footer
        style={{
          marginTops: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Footer>
    </Content>
  </ThemeProvider>
)
}

export default Layout
