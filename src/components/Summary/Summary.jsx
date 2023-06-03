import React, { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import hacker from "../../img/hacker1.jpg"
import laugh from "../../img/laugh4.jpg"
import Typed from "react-typed"
import HideInput from "../Contants/HideInput"
import { moblie } from "../Contants/sizeScreen"
import Resume from "../../img/Ngo-Nhat-Duy.pdf"

const Container = styled.div`
  position: relative;
  background-color: black;
  color: #fff;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: ${moblie}) {
    display: block;
    position: relative;
  }
`
const WrapperTitle = styled.div`
  height: 100%;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  line-height: 4rem;

  @media screen and (max-width: ${moblie}) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`
const Title = styled.div``
const Hello = styled.p`
  font-size: 18px;
  color: #b2acac;
`
const Name = styled.p`
  font-size: 54px;
  color: #02d3f3;
  font-weight: 900;
`
const Position = styled.p`
  font-size: 24px;
`
const Button = styled.button`
  padding: 6px 0;
  font-size: 14px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 4px;

  transition: 0.5s;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 35px #02d3f3;
    background-color: #02d3f3;
    color: #fff;
  }
`
const LinkButton = styled.a`
  padding: 6px 16px;
  text-decoration: none;
  color: #000;
  transition: 0.5s;

  :hover {
    cursor: pointer;
    color: #fff;
  }
`
const WrapperImg = styled.div`
  grid-column: 3/5;
  background-color: white;
  position: relative;

  @media screen and (max-width: ${moblie}) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
`
const anima = keyframes`
  0%{
    top: 53%;
    opacity: 0;
  }
  100%{
    top: 50%;
  }
`
const Image2 = styled.img`
  display: ${(prop) => (prop.show ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  animation: ${anima} 0.5s ease-in-out;
  z-index: 20;

  @media screen and (max-width: ${moblie}) {
    display: none;
  }
`
const Summary = ({ getOffsetTopSummary }) => {
  const [show, setShow] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const { offsetTop } = ref.current
    getOffsetTopSummary(offsetTop)
  }, [getOffsetTopSummary])

  return (
    <Container ref={ref}>
      <HideInput id="summary" />
      <WrapperTitle>
        <Title>
          <Hello>Hello, my name is</Hello>
          <Name>
            <Typed strings={["Ngô Nhật Duy"]} typeSpeed={100} loop />
          </Name>
          <Position>I'm a Web Developer</Position>
        </Title>
        <Button>
          <LinkButton href={Resume} download="Ngô Nhật Duy">
            Download my CV
          </LinkButton>
        </Button>
      </WrapperTitle>
      <WrapperImg>
        <Image
          src={hacker}
          alt="hacker"
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
        />
        <Image2
          src={laugh}
          alt="laugh"
          show={show}
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
        />
      </WrapperImg>
    </Container>
  )
}

export default Summary
