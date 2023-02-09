import { ViewHeadlineOutlined } from "@material-ui/icons"
import React, { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import { moblie } from "../Contants/sizeScreen"

const animation = keyframes`
  0%{
    width: 0%;
    left: -100%;
    opacity: 0;
  }
  
  100%{
    width: 100%;
    left: 0;
    opacity: 1;
  }
`

const Container = styled.div``

const IconMenu = styled(ViewHeadlineOutlined)`
  display: none !important;

  @media screen and (max-width: ${moblie}) {
    position: fixed;
    top: 30px;
    right: 30px;
    font-size: 40px !important;
    padding: 5px;
    display: ${(prop) =>
      prop.show === 0 ? "block !important" : "none !important"};
    z-index: 10;
    color: #fff;

    :hover {
      cursor: pointer;
    }
  }
`
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
  color: rgb(255, 255, 255);
  height: ${(prop) => (prop.heightHeader === 1 ? "60px" : "100px")};
  background-color: ${(prop) =>
    prop.heightHeader === 1 ? "#f42a4c" : "transparent"};
  box-shadow: ${(prop) =>
    prop.heightHeader === 1 ? "2px 2px 2px #505454" : "none"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: ${(prop) => (prop.show === 0 ? "" : animation)} 0.8s;
  transition: all 0.5s ease-out;

  @media screen and (max-width: ${moblie}) {
    background-color: #4c4949;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    flex-direction: column;
    box-shadow: none;
    display: ${(prop) => (prop.show === 0 ? "none" : "flex")};
  }
`
const WrapperLogo = styled.div``
const Logo = styled.div`
  font-size: 36px;
  font-weight: 700;
`
const WrapperMenu = styled.div``
const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;

  @media screen and (max-width: ${moblie}) {
    flex-direction: column;
  }
`

const styleHoverButton = {
  border: "2px solid #fff",
  "border-radius": "16px",
  "box-shadow": "0 0 50px #fff",
  "background-color": "#fff",
  color: "#000",
}
const Item = styled.li`
  list-style: none;
  color: #fff;
  padding: 5px 0;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid transparent;
  margin: 0 15px;
  transition: all 0.5s;

  ${(prop) => (prop.nameItem === prop.nameClick ? styleHoverButton : "")}

  :hover {
    cursor: pointer;
    ${styleHoverButton}
  }

  @media screen and (max-width: ${moblie}) {
    margin: 10px 0;
    font-size: 20px;
    padding: 8px 16px;
    text-align: right;
  }
`
const Label = styled.label`
  padding: 6px 10px;
  border-radius: 16px;
  :hover {
    cursor: pointer;
  }
`

const linkMenu = [
  {
    name: "Summary",
    for: "summary",
  },
  {
    name: "About",
    for: "about",
  },
  {
    name: "Education",
    for: "education",
  },
  {
    name: "Skills",
    for: "skills",
  },

  {
    name: "Experiences",
    for: "workexperiences",
  },
  {
    name: "Contact",
    for: "contact",
  },
]
const Header = ({
  parentCallback,
  TopAboutMe,
  TopEducation,
  TopSkills,
  TopWorkExperiences,
  TopContact,
}) => {
  const [clickGetNameItem, setClickGetNameItem] = useState("Summary")
  const [heightHeader, setHeighHeader] = useState(0)
  const [show, setShow] = useState(0)
  const ref = useRef()

  const handleItem = (name) => {
    setClickGetNameItem(name)
    parentCallback(name)
    setShow(0)
  }
  useEffect(() => {
    const { offsetHeightHeader } = ref.current

    window.addEventListener("scroll", () => {
      if (window.scrollY <= TopAboutMe - offsetHeightHeader) {
        setClickGetNameItem("Summary")
      }
      if (
        window.scrollY <= TopEducation - offsetHeightHeader &&
        window.scrollY >= TopAboutMe - offsetHeightHeader + 1
      ) {
        setClickGetNameItem("About")
      }
      if (
        window.scrollY <= TopSkills - offsetHeightHeader &&
        window.scrollY >= TopEducation - offsetHeightHeader + 1
      ) {
        setClickGetNameItem("Education")
      }
      if (
        window.scrollY <= TopWorkExperiences - offsetHeightHeader &&
        window.scrollY >= TopSkills - offsetHeightHeader + 1
      ) {
        setClickGetNameItem("Skills")
      }
      if (
        window.scrollY <= TopContact - offsetHeightHeader &&
        window.scrollY >= TopWorkExperiences - offsetHeightHeader + 1
      ) {
        setClickGetNameItem("Experiences")
      }
      if (window.scrollY >= TopContact - offsetHeightHeader) {
        setClickGetNameItem("Contact")
      }
    })
  }, [
    TopAboutMe,
    TopContact,
    TopEducation,
    TopSkills,
    TopWorkExperiences,
    clickGetNameItem,
  ])
  // console.log("hei", heightHeader)
  useEffect(() => {
    window.onscroll = function () {
      // console.log("window.scrollY", window.scrollY)
      if (window.scrollY >= window.screen.availHeight / 2) {
        setHeighHeader(1)
        // console.log("100vhhhhhhhhhhhhhhhhhhhhhhh")
      } else {
        setHeighHeader(0)
      }
    }
  }, [])

  return (
    <Container ref={ref}>
      <IconMenu onClick={() => setShow(1)} show={show} />
      <Wrapper heightHeader={heightHeader} show={show}>
        <WrapperLogo>
          <Logo>My Profile</Logo>
        </WrapperLogo>
        <WrapperMenu>
          <Menu>
            {linkMenu.map((item) => (
              <Item
                key={item.name}
                id={item.name}
                nameItem={item.name}
                nameClick={clickGetNameItem}
                onClick={() => handleItem(item.name)}
              >
                <Label htmlFor={item.for}>{item.name}</Label>{" "}
              </Item>
            ))}
          </Menu>
        </WrapperMenu>
      </Wrapper>
    </Container>
  )
}

export default Header
