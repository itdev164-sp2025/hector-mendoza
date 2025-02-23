import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyleHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.header.backgroundColor}
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${props => props.theme.header.color}
`

const Header = ({ siteTitle }) => (
  <StyleHeader>
    <StyledLink to="/">
    {siteTitle}
    </StyledLink>
  </StyleHeader>
)

export default Header
