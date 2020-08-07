import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "./layout"
import Article from "./story/article"
import Comments from "./story/comments"
import Reply from "./story/reply"
import { Comment } from "./story/types"

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
  location: {
    pathname: string
  }
}

const Story = ({ data, location }: Props) => {
  const { node } = data.allStrapiArticle.edges[0]
  const { slug } = node

  const [replyingTo, setReplyingTo] = useState<Comment | null>(null)
  const [comments, setComments] = useState<Comment[]>([])

  const fetchComments = async () => {
    const response = await fetch(
      `http://localhost:1337/comments?slug=${slug}&parent_null=true`
    )
    const jsonResponse = await response.json()

    setComments(jsonResponse)
  }

  useEffect(() => {
    fetchComments().catch(console.error)
  }, [])

  return (
    <Layout location={location.pathname}>
      <Article data={node} />
      <Comments comments={comments} setReplyingTo={setReplyingTo} />
      <Reply
        slug={slug}
        replyingTo={replyingTo}
        setReplyingTo={setReplyingTo}
        fetchComments={fetchComments}
      />
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
