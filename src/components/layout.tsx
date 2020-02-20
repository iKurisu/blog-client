/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"

import Header from "./header"
import { Main } from "./layout.styled"
import "./layout.css"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
)

export default Layout
