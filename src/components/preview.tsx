import React from "react"
import { Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import {
  Wrapper,
  ImageWrapper,
  Title,
  Category,
  Description,
  PublishedDate,
  LinkWrapper,
  StyledLink,
} from "./preview.styled"
import { formatDate } from "../utils/date"

// TODO: Make description and category required
interface Props {
  image: FluidObject
  title: string
  description?: string
  category?: string
  publishedAt: string
  link: string
}

const Preview = (props: Props) => {
  const { title, image, description, category, publishedAt, link } = props

  return (
    <Wrapper>
      <ImageWrapper to={link}>
        <Img fluid={image} />
      </ImageWrapper>
      <Category>
        <span>{category ?? "architecture"}</span>
      </Category>
      <Title>
        <Link to={link}>{title}</Link>
      </Title>
      <Description>
        <p>
          {description ??
            "One day the landlord came to my Brooklyn home to do some small repairs. He was a senior black man with really nice manners, very calm and polite."}
        </p>
      </Description>
      <LinkWrapper>
        <StyledLink to={link}>
          <span>read</span>
        </StyledLink>
      </LinkWrapper>
      <PublishedDate>
        <span>{formatDate(publishedAt)}</span>
      </PublishedDate>
    </Wrapper>
  )
}

export default Preview
