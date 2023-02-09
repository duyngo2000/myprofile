import { BusinessCenterOutlined, SchoolOutlined } from "@material-ui/icons"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import HideInput from "../Contants/HideInput"
import Title from "../Contants/Title"
import bg from "../../img/bg-experiences.jpg"
import { moblie } from "../Contants/sizeScreen"

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: #7571be;
  @media screen and (max-width: ${moblie}) {
    height: auto;
    padding-bottom: 30px;
  }
`
const WrapperContent = styled.div`
  height: 70vh;
  margin: auto;
  line-height: 70vh;
  @media screen and (max-width: ${moblie}) {
    height: auto;
  }
`
const MenuWork = styled.ul`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: ${moblie}) {
    flex-direction: column;
  }
`
const Item = styled.li`
  flex: 1;
  list-style: none;
  border: 5px solid #02d3f3;
  border-radius: 8px;
  margin: 0 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.5;
  min-height: 400px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  :hover {
    transform: scale(1.05) !important;
    cursor: pointer;
    background-color: red;
    box-shadow: 0 0 20px #02d3f3;
  }

  @media screen and (max-width: ${moblie}) {
    flex: 1;
    min-height: auto;
    width: 100%;
    margin: 0;
    padding: 0;
    margin: 10px 0;
    margin-left: -5px;
    padding: 10px 0;
    flex-direction: column;

    :hover {
      transform: scale(1) !important;
    }
  }
`
const Icon = styled.div`
  width: 20px;
  height: 20px;
  padding: 10px;
  border-radius: 50%;
  border: 3px solid #02d3f3;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  flex: 1;
  min-height: 100px;
  max-height: 200px;
  line-height: 1.8;
`
const Time = styled.div`
  background-color: #ccc;
  padding: 4px 10px;
  border-radius: 8px;
`
const DoWork = styled.ul``
const Work = styled.li`
  list-style: none;
  font-size: 14px;
`
const Company = styled.p`
  font-size: 18px;
  color: #5d878d;
  font-weight: 600;
`
const Do = styled.p``

const API = [
  {
    company: "Project 1 - car sales website",
    icon: <SchoolOutlined />,
    time: "2/08/2022 - 2/11/2022",
    work: [
      {
        do: "FE: html, css, js, ajax",
      },
      {
        do: "BE: PHP + MySQL",
      },
    ],
  },
  {
    company: "Project 2 - travel website",
    icon: <SchoolOutlined />,
    time: "2/08/2022 - 2/11/2022",
    work: [
      {
        do: "FE: ReactJS, redux",
      },
      {
        do: "BE: Nodejs, mongodb",
      },
    ],
  },
  {
    company: "Gcalls - Giải pháp tổng đài CSKH",
    icon: <BusinessCenterOutlined />,
    time: "2/08/2022 - 2/11/2022",
    work: [
      {
        do: "Created a progressive Web App",
      },
      {
        do: "Used cloudflare + Server ubuntu",
      },
      {
        do: "Used Puppeteer",
      },
      {
        do: "Docker",
      },
    ],
  },
]
const WorkExperiences = ({ getOffsetTopWorkExperiences }) => {
  const ref = useRef()

  // console.log(window.innerWidth, Number(moblie.split("px")[0]))
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)
  window.addEventListener("resize", () => {
    setWidthScreen(window.innerWidth)
  })

  useEffect(() => {
    const { offsetTop } = ref.current
    getOffsetTopWorkExperiences(offsetTop)
  }, [getOffsetTopWorkExperiences])

  return (
    <Container ref={ref}>
      <HideInput id="workexperiences" />
      <Title text="Work Experiences" />
      <WrapperContent>
        <MenuWork>
          {API.map((item, index) => (
            <Item
              key={index}
              data-aos={
                widthScreen <= Number(moblie.split("px")[0])
                  ? "fade-right"
                  : index % 2 == 0
                  ? "fade-right"
                  : "fade-left"
              }
            >
              <Icon>{item.icon}</Icon>
              <Content>
                <Time>{item.time}</Time>
                <Company>{item.company}</Company>
                <DoWork>
                  {item.work.map((item2, index2) => (
                    <Work key={index2}>
                      <Do>{item2.do}</Do>
                    </Work>
                  ))}
                </DoWork>
              </Content>
            </Item>
          ))}
        </MenuWork>
      </WrapperContent>
    </Container>
  )
}

export default WorkExperiences
