import React from "react"
import styled from "styled-components"

const Input = styled.span`
  position: absolute;
  top: -60px;
  left: 0;
  width: 0px;
  height: 0px;
  outline: none;
  border: none;
  opacity: 0;
  cursor: context-menu;
`
const HideInput = ({ id }) => {
  return <Input id={id} />
}

export default HideInput
