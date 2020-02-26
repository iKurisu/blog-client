import styled from "styled-components"

export const StyledArticle = styled.article`
  margin-bottom: 96px;
`

export const HeadingWrapper = styled.div`
  max-width: 760px;
  margin: 96px auto 0;

  @media (max-width: 480px), (max-width: 823px) and (orientation: landscape) {
    margin-top: 72px;
  }
`

export const Heading = styled.h1`
  font-size: 41.7px;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    background: #2a2a2a;
    margin: 24px auto 32px;
  }
`

export const SubHeading = styled.div`
  text-align: center;
  margin-bottom: 64px;

  span {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.35em;
    text-transform: uppercase;
  }

  span:first-child {
    margin-right: 30px;
  }

  @media (max-width: 480px), (max-width: 823px) and (orientation: landscape) {
    margin-bottom: 56px;

    span {
      font-size: 11px;
      letter-spacing: 0.3em;
    }
  }
`

export const ImgWrapper = styled.div`
  width: 1150px;
  margin: 0 auto 48px;
  text-align: center;

  @media (max-width: 1366px) {
    max-width: 100%;
  }

  @media (max-width: 1024px), (max-width: 823px) and (orientation: landscape) {
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`

export const Alt = styled.span`
  color: #5a5a5a;
  font-size: 13px;
  font-weight: 200;
  letter-spacing: 0.075em;
  display: inline-block;
  margin-top: 16px;
`

export const Paragraph = styled.p`
  max-width: 760px;
  margin: 0 auto 40px;
`
