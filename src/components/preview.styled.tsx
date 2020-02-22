import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.article`
  max-width: 33%;
  flex: 1 30%;
  margin: 0 15px 80px;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  &:last-child:not(:nth-child(3n + 3)),
  &:nth-last-child(2):nth-child(3n + 1) {
    max-width: calc((100% - 60px) / 3);
  }

  &:nth-child(3n + 3) {
    margin-right: 0;
  }
`

export const ImageWrapper = styled(Link)``

export const Category = styled.div`
  padding: 1.25em 0 0.9em;

  span {
    font-family: "Jost";
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`

export const Title = styled.h1`
  font-family: "Jost";
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.3;
  margin-bottom: 15px;
`

export const Description = styled.div`
  max-width: 90%;
  margin-bottom: 25px;

  p {
    font-family: "Spectral";
    font-size: 15px;
    font-weight: 300;
    line-height: 1.3;
  }
`

export const LinkWrapper = styled.div`
  display: inline-block;
`

export const StyledLink = styled(Link)`
  span {
    color: #b02626;
    font-family: "Jost";
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 0.06em;
  }
`

export const PublishedDate = styled.div`
  padding-right: 20px;
  float: right;

  span {
    font-family: "Jost";
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 0.05em;
  }
`
