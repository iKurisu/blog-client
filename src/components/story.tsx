import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "./layout"
import Article from "./story/article"
import Reply from "./story/reply"

interface Props {
  data: {
    allStrapiArticle: {
      edges: Array<{
        node: {
          title: string
          image: { childImageSharp: { fluid: FluidObject } }
          content: string
          published_at: string
          category?: string
          imageAlt?: string
          slug: string
        }
      }>
    }
  }
}

const Story = ({ data }: Props) => {
  const { node } = data.allStrapiArticle.edges[0]

  return (
    <Layout>
      <Article data={node} />
      <Reply slug={node.slug} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allStrapiArticle(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2400, maxHeight: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
          published_at
          slug
        }
      }
    }
  }
`

export default Story
