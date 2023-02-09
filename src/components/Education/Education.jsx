import {
  FindInPageOutlined,
  HomeWorkOutlined,
  PlaceOutlined,
} from "@material-ui/icons"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import HideInput from "../Contants/HideInput"
import { moblie } from "../Contants/sizeScreen"
import Title from "../Contants/Title"
import Map from "./Map"

const Container = styled.div`
  position: relative;
  background-color: #717086;
  height: 100vh;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  height: 70vh;
  background-color: aliceblue;
  border-radius: 8px;

  @media screen and (max-width: ${moblie}) {
    display: block;
    height: 80vh;
  }
`
const WrapperContent = styled.div`
  flex: 1;
  padding: 0 10px;
  font-weight: 600;

  @media screen and (max-width: ${moblie}) {
    margin-top: 10px;
  }
`
const Name = styled.div`
  display: flex;
  align-items: center;
`
const Address = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`
const Website = styled.div`
  display: flex;
  align-items: center;
`
const WrapperMap = styled.div`
  flex: 2;
`
const style = {
  padding: "10px",
  borderRadius: "50%",
  border: "1px solid #02d3f3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px",
  color: "#fff",
  backgroundColor: "#02d3f3",
}

const Education = ({ getOffsetTopEducation }) => {
  const ref = useRef()
  useEffect(() => {
    const { offsetTop } = ref.current
    getOffsetTopEducation(offsetTop)
  }, [getOffsetTopEducation])

  return (
    <Container ref={ref}>
      <HideInput id="education" />
      <Title text="Education" />
      <Wrapper>
        <WrapperMap>
          <Map />
        </WrapperMap>
        <WrapperContent>
          <Name data-aos="fade-up">
            <HomeWorkOutlined style={style} /> Nam Cần Thơ Univercity
          </Name>
          <Address data-aos="fade-up">
            <PlaceOutlined style={style} />
            168 Nguyễn Văn Cừ nối dài, An Bình, Ninh Kiều, Cần Thơ, Việt Nam
          </Address>
          <Website data-aos="fade-up">
            <FindInPageOutlined style={style} />{" "}
            <a href="http://www.nctu.edu.vn/" target="_blank" rel="noreferrer">
              http://www.nctu.edu.vn/
            </a>
          </Website>
        </WrapperContent>
      </Wrapper>
    </Container>
  )
}

export default Education
