import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Title from "../Contants/Title"
import coder from "../../img/coder.jpg"
import HideInput from "../Contants/HideInput"
import "aos/dist/aos.css"
import { moblie } from "../Contants/sizeScreen"

const Container = styled.div`
  height: 100vh;
  background-color: aliceblue;
  background-color: #7571be;
  position: relative;
`
const WrapperContent = styled.div`
  height: calc(100% - 76px - 60px);
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${moblie}) {
    width: 100%;
    position: relative;
  }
`
const WrapperImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${moblie}) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const Image = styled.img`
  width: 25vw;
  height: 60vh;
  border-radius: 8px;
  @media screen and (max-width: ${moblie}) {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`
const WrapperText = styled.div`
  flex: 1;

  @media screen and (max-width: ${moblie}) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
const Text = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  padding: 0 20px;
  margin-bottom: 20px;
`
const Content = styled.p`
  padding: 0 20px;
  color: #fff;
  line-height: 1.3rem;
  font-size: 16px;
`
const Highlight = styled.span`
  color: #f42a4c;
`

const AboutMe = ({ getOffsetTopAboutMe }) => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)

  const ref = useRef()
  window.addEventListener("resize", () => {
    setWidthScreen(window.innerWidth)
  })
  useEffect(() => {
    const { offsetTop } = ref.current
    getOffsetTopAboutMe(offsetTop)
  }, [getOffsetTopAboutMe])
  return (
    <Container ref={ref}>
      <HideInput id="about" />
      <Title text="About Me" />
      <WrapperContent>
        {/*  */}
        <WrapperImage data-aos="fade-up">
          <Image src={coder} />
        </WrapperImage>
        <WrapperText>
          <Text data-aos="fade-right">
            <Highlight>Developer &</Highlight> Designer
          </Text>
          <Content
            data-aos={
              widthScreen <= Number(moblie.split("px")[0])
                ? "fade-right"
                : "fade-left"
            }
          >
            I am a front-end web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations.
          </Content>
        </WrapperText>
      </WrapperContent>
    </Container>
  )
}

export default AboutMe
