import styled from "styled-components"

const padding = 58

export const Main = styled.main`
  width: 100%;
  max-width: ${1300 + padding * 2}px;
  padding: 0 ${padding}px;
  margin: 0 auto;

  @media (max-width: 1600px) {
  }

  @media (max-width: 768px) {
    padding: 0 46px;
  }

  @media (max-width: 480px), (max-width: 823) and (orientation: landscape) {
    max-width: 100%;
    padding: 0 29px;
  }
`
