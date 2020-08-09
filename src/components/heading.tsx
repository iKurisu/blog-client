import React from "react"
import { Title, Wrapper } from "./heading.styled"

interface Props {
  title: string
}

const Heading = ({ title }: Props) => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
)

export default Heading
