import React from "react"
import Markdown from "react-markdown"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import Layout from "./layout"
import {
  Paragraph,
  ImgWrapper,
  Heading,
  HeadingWrapper,
  SubHeadingWrapper,
  Alt,
} from "./story.styled"
import { formatDate } from "../utils/date"

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
        }
      }>
    }
  }
}

const Story = ({ data }: Props): JSX.Element => {
  const {
    title,
    image,
    imageAlt,
    content,
    published_at: publishedAt,
    category,
  } = data.allStrapiArticle.edges[0].node

  return (
    <Layout>
      <HeadingWrapper>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <SubHeadingWrapper>
        <span>{formatDate(publishedAt)}</span>
        <span>{category ?? "architecture"}</span>
      </SubHeadingWrapper>
      <ImgWrapper>
        <Img fluid={image.childImageSharp.fluid} />
        <Alt>{imageAlt ?? "Meaningless image"}</Alt>
      </ImgWrapper>
      <Markdown source={content} renderers={{ paragraph: Paragraph }} />
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
              fluid(maxWidth: 2400, maxHeight: 1293) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
          published_at
        }
      }
    }
  }
`

export default Story
