import styled, { createGlobalStyle } from "styled-components"

export const FontFaces = createGlobalStyle`
  @font-face {
    font-family: "HKGrotesk";
    src: url("../assets/fonts/HKGrotesk/HKGrotesk-Regular.otf");
    font-style: normal;
    font-weight: 400;
  }
`

export const Main = styled.main`
  max-width: 870px;
  margin: 0 auto;
`
