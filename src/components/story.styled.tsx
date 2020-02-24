import styled from "styled-components"

export const HeadingWrapper = styled.div`
  max-width: 760px;
  margin: 96px auto 0;
`

export const Heading = styled.h1`
  font-size: 41.7px;
  font-family: "Spectral";
  font-weight: 300;
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

export const SubHeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 64px;

  span {
    font-family: "Jost";
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.45em;
    text-transform: uppercase;
  }

  span:first-child {
    margin-right: 30px;
  }
`

export const ImgWrapper = styled.div`
  width: 1150px;
  margin: 0 auto 56px;
  text-align: center;
`

export const Alt = styled.span`
  color: #5a5a5a;
  font-family: "Jost";
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
