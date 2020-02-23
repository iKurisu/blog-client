import React from "react"
import { Wrapper, Category, CategoriesList } from "./categories.styled"

// TODO: Change categories to required
interface Props {
  categories?: string[]
}

const Categories = ({
  categories = ["Architecture", "Photography"],
}: Props) => (
  <Wrapper>
    <CategoriesList>
      <li>
        <Category>All</Category>
      </li>
      {categories.map((category, id) => (
        <li key={id}>
          <Category>{category}</Category>
        </li>
      ))}
    </CategoriesList>
  </Wrapper>
)

export default Categories
