import React from "react"

import {
  StyledHeader,
  Wrapper,
  Logo,
  Nav,
  NavItem,
  NavLink,
} from "./header.styled"
import MenuButton from "./menu-button"

interface Props {
  location: string
}

const Header = ({ location }: Props) => {
  console.log(location)
  const at = (route: string) => location === route

  return (
    <StyledHeader>
      <Wrapper>
        <Logo to="/">Christian C.</Logo>
        <Nav>
          <NavItem selected={!at("/about")}>
            <NavLink to="/">Blog</NavLink>
          </NavItem>
          <NavItem selected={at("/about")}>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </Nav>
        <MenuButton />
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
