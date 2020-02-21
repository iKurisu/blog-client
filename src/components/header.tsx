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

const Header = () => {
  const { pathname } = window.location

  const at = (route: string) => pathname === route

  return (
    <StyledHeader>
      <Wrapper>
        <Logo to="/">Christian C.</Logo>
        <Nav>
          <NavItem selected={at("/")}>
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
