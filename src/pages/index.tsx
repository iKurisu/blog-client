import React from "react"
import Markdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: {
    allStrapiArticle: {
      edges: Array<{
        node: { title: string; image: { publicURL: string }; content: string }
      }>
    }
  }
}

const IndexPage = ({ data }: Props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h1>{data.allStrapiArticle.edges[0].node.title}</h1>
    <img src={data.allStrapiArticle.edges[0].node.image.publicURL} />
    <Markdown source={data.allStrapiArticle.edges[0].node.content} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query Articles {
    allStrapiArticle {
      edges {
        node {
          title
          image {
            publicURL
          }
          content
        }
      }
    }
  }
`
