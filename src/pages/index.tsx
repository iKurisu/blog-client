import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import { ArticlesWrapper } from "./index.styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Preview from "../components/preview"
import Heading from "../components/heading"
import Categories from "../components/categories"

interface Props {
  data: {
    allStrapiArticle: {
      edges: Array<{
        node: {
          id: string
          title: string
          image: { childImageSharp: { fluid: FluidObject } }
          published_at: string
          slug: string
        }
      }>
    }
  }
  location: {
    pathname: string
  }
}

const IndexPage = ({ data, location }: Props) => (
  <Layout location={location.pathname}>
    <SEO title="Home" />
    <Heading />
    <Categories />
    <ArticlesWrapper>
      {data.allStrapiArticle.edges.map(({ node }) => {
        const { title, published_at: publishedAt, image, id, slug } = node

        return (
          <Preview
            title={title}
            image={image.childImageSharp.fluid}
            publishedAt={publishedAt}
            link={`/${slug}`}
            key={id}
          />
        )
      })}
    </ArticlesWrapper>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query Articles {
    allStrapiArticle {
      edges {
        node {
          id
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2400, maxHeight: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          published_at
          slug
        }
      }
    }
  }
`
