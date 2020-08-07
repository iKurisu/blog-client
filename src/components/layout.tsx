/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"

import Header from "./header"
import { Main } from "./layout.styled"
import GlobalStyles from "../styles/global"
import "../styles/fonts.css"

interface Props {
  children: ReactNode
  location: string
}

const Layout = ({ children, location }: Props) => (
  <>
    <GlobalStyles />
    <Header location={location} />
    <Main>{children}</Main>
  </>
)

export default Layout
