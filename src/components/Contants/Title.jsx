import React from "react"
import styled from "styled-components"
import "aos/dist/aos.css"

const WrapperTitle = styled.div`
  text-align: center;
  padding-top: 20px;
  margin-bottom: 40px;
`
const Text = styled.span`
  color: #02d3f3;
  font-size: 46px;
  font-weight: 900;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 4px;
    background-color: #02d3f3;
    box-shadow: 0 0 50px #02d3f3;
  }
`
const Title = ({ text, id }) => {
  return (
    // data-aos="flip-up"
    <WrapperTitle id={id}>
      <Text data-aos="fade-up">{text}</Text>
    </WrapperTitle>
  )
}

export default Title
