import React, { useState } from "react"

import { Wrapper, IconWrapper } from "./menu-button.styled"
import Hamburger from "./menu-button/hamburger"
import Cross from "./menu-button/cross"

type Button = "hamburger" | "cross"

const MenuButton = () => {
  const [button, setButton] = useState<Button>("hamburger")

  const toggleButton = (): void =>
    setButton(prev => (prev === "hamburger" ? "cross" : "hamburger"))

  return (
    <Wrapper onClick={toggleButton}>
      <IconWrapper toggled={button === "hamburger"}>
        {button === "hamburger" ? <Hamburger /> : <Cross />}
      </IconWrapper>
      <IconWrapper toggled={button === "cross"}>
        <Cross />
      </IconWrapper>
    </Wrapper>
  )
}

export default MenuButton
