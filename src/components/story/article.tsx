import React from "react"
import Markdown from "react-markdown"
import Img, { FluidObject } from "gatsby-image"

import {
  HeadingWrapper,
  Heading,
  SubHeading,
  ImgWrapper,
  Alt,
  Paragraph,
  StyledArticle,
} from "./article.styled"
import { formatDate } from "../../utils/date"

interface Props {
  data: {
    title: string
    image: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    image_alt?: string
    content: string
    published_at: string
    category?: string
  }
}

const Article = ({ data }: Props) => {
  const {
    title,
    image,
    image_alt: imageAlt,
    content,
    published_at: publishedAt,
    category,
  } = data

  return (
    <StyledArticle>
      <HeadingWrapper>
        <Heading>{title}</Heading>
      </HeadingWrapper>
      <SubHeading>
        <span>{formatDate(publishedAt)}</span>
        <span>{category ?? "architecture"}</span>
      </SubHeading>
      <ImgWrapper>
        <Img fluid={image.childImageSharp.fluid} />
        <Alt>{imageAlt ?? "Meaningless image"}</Alt>
      </ImgWrapper>
      <Markdown source={content} renderers={{ paragraph: Paragraph }} />
    </StyledArticle>
  )
}

export default Article
