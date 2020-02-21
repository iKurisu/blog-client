import styled from "styled-components"

interface IconProps {
  toggled: boolean
}

export const Wrapper = styled.div`
  display: none;
  position: relative;
  top: -8px;
  right: 20px;

  @media (max-width: 1024px) {
    display: block;
  }
`

export const IconWrapper = styled.span`
  position: absolute;
  cursor: pointer;
  opacity: ${(props: IconProps) => (props.toggled ? 1 : 0)};

  &:last-child {
    left: 1px;
    width: 17px;
  }

  svg {
    fill: #222;
  }
`
