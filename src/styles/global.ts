import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    text-rendering: optimizeLegibility;
    background-color: #fbfbfb;
    line-height: 1;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: inline-block;
  }
  
  a, span, h3, input, textarea {
    font-family: "Jost", sans-serif;
  }

  h1, p  {
    font-family: "Spectral", serif;
    font-weight: 300;
  }

  p {
    letter-spacing: 0.015em;
    line-height: 1.3;
  }

  input, textarea {
    background: transparent;
    border: none;
  }

  textarea {
    resize: none;
  }
`
