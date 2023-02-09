import React from "react"
import styled from "styled-components"

const Input = styled.input`
  position: absolute;
  top: 45vh;
  left: 0;
  width: 0;
  height: 0;
  outline: none;
  border: none;
  opacity: 0;
  cursor: context-menu;
`
const HideInput = ({ id }) => {
  return <Input id={id} />
}

export default HideInput
