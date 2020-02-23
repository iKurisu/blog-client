import styled from "styled-components"

export const Wrapper = styled.div`
  margin-bottom: 64px;
`

export const CategoriesList = styled.ul`
  li {
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
  }

  li:hover span {
    color: inherit;
  }

  li:first-child {
    margin-left: 0;
  }

  li:last-child {
    margin-right: 0;
  }
`

export const Category = styled.span`
  color: #5a5a5a;
  font-family: "Jost";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`
