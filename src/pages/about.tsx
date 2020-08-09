import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading"
import { Content } from "./about.styled"

interface Props {
  location: {
    pathname: string
  }
}

const About = ({ location }: Props) => (
  <Layout location={location.pathname}>
    <SEO title="About" description="About the author." />
    <Heading title="About" />
    <Content>
      <p>Christian Crespo is a Front End Developer, from Spain.</p>
    </Content>
  </Layout>
)

export default About
