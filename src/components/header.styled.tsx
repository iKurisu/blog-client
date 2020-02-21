import styled from "styled-components"
import { Link } from "gatsby"

interface NavItemProps {
  selected: boolean
}

export const StyledHeader = styled.header`
  padding: 39px 0;

  @media (max-width: 480px) {
    padding: 28px 0;
  }
`

export const Wrapper = styled.div`
  padding: 0 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 46px;
  }

  @media (max-width: 480px) {
    padding: 0 29px;
  }
`

export const Logo = styled(Link)`
  font-family: "HKGrotesk";
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.015em;
`

export const Nav = styled.ul`
  @media (max-width: 1024px) {
    display: none;
  }
`

export const NavItem = styled.li`
  color: ${(props: NavItemProps) => (props.selected ? "#cfaa80" : "inherit")};
  display: inline-block;
  cursor: pointer;
  padding: 7px 15px;
  transition: color 150ms;

  &:hover {
    color: #cfaa80;
  }
`

export const NavLink = styled(Link)`
  font-family: "HKGrotesk";
  font-size: 18px;
  letter-spacing: 0.025em;
`
