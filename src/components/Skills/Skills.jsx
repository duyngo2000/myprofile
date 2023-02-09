import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { imgSkill } from "./imgSkills"
import Title from "../Contants/Title"
import HideInput from "../Contants/HideInput"
import "aos/dist/aos.css"
import { moblie } from "../Contants/sizeScreen"

const Container = styled.div`
  background-color: #222222;
  position: relative;
  padding-bottom: 30px;

  @media screen and (max-width: ${moblie}) {
    padding-bottom: 40px;
  }
`

const WrapperSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  @media screen and (max-width: ${moblie}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`
const Left = styled.span`
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${moblie}) {
    margin: 10px 0;
  }
`

const WrapperCard = styled.div`
  width: 400px;
  box-shadow: 0 0 12px #02d3f3;

  @media screen and (max-width: ${moblie}) {
    width: 300px;
  }
`
const Card = styled.div`
  position: relative;
  height: 120px;
  background-color: #fff;
  @media screen and (max-width: ${moblie}) {
    height: 100px;
  }
`
const Box = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  right: ${(prop) => (prop.turn === "left" ? 0 : "")};
  left: ${(prop) => (prop.turn === "right" ? 0 : "")};
  border-radius: 8px;
`
const Circle = styled.div`
  box-shadow: ${(prop) => `0 0 ${prop.value}px #02d3f3`};
  height: 120px;
  width: 120px;
  position: absolute;
  background-color: #2d44ba;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  background: ${(prop) =>
    `conic-gradient(#4d5bf9 ${prop.value * 3.6}deg, #cadcff ${
      prop.value * 3.6
    }deg)`};

  ::before {
    content: "";
    position: absolute;
    height: 84%;
    width: 84%;
    background-color: aqua;
    border-radius: 50%;
  }

  @media screen and (max-width: ${moblie}) {
    width: 100px;
    height: 100px;
  }
`
const Percent = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 38px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`
const WrapperText = styled.div`
  position: absolute;
  top: 0;
  right: ${(prop) => (prop.turn === "right" ? 0 : "")};
  left: ${(prop) => (prop.turn === "left" ? 0 : "")};
  bottom: 0;
  width: calc(100% - 80px);
  margin: 10px;

  @media screen and (max-width: ${moblie}) {
    width: calc(100% - 60px);
    margin: 10px 5px;
  }
`
const Image = styled.img`
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0;
  right: ${(prop) => (prop.turn === "right" ? 0 : "")};
  left: ${(prop) => (prop.turn === "left" ? 0 : "")};
  bottom: 0;

  @media screen and (max-width: ${moblie}) {
    display: none;
  }
`
const Text = styled.span`
  position: absolute;
  right: ${(prop) => (prop.turn === "right" ? "110px" : "")};
  left: ${(prop) => (prop.turn === "left" ? "110px" : "")};
  top: 0;
  bottom: 0;
  color: #0000ff;
  font-size: 14px;

  @media screen and (max-width: ${moblie}) {
    left: 0;
    right: 0;
  }
`
const HighLight = styled.span`
  color: #f302ab;
  color: #0000ff;
  font-weight: 700;
`

const Skills = ({ getOffsetTopSkills }) => {
  const [counterHTMLCSS, setCounterHTMLCSS] = useState(0)
  const [counterReactJS, setCounterReactJS] = useState(0)
  const [counterRedux, setCounterRedux] = useState(0)
  const [counterJWT, setCounterJWT] = useState(0)
  const [counterNodeJS, setCounterNodeJS] = useState(0)
  const [counterPuppeteer, setCounterPuppeteer] = useState(0)
  const [counterMongoDB, setCounterMongoDB] = useState(0)
  const counter = {
    HTMLCSS: 90,
    ReactJS: 77,
    Redux: 88,
    JWT: 60,
    NodeJS: 65,
    Puppeteer: 90,
    MongoDB: 75,
  }

  const [startActionHTMLCSS, setStartActionHTMLCSS] = useState(false)
  const [startActionReactJS, setStartActionReactJS] = useState(false)
  const [startActionRedux, setStartActionRedux] = useState(false)
  const [startActionJWT, setStartActionJWT] = useState(false)
  const [startActionNodeJS, setStartActionNodeJS] = useState(false)
  const [startActionPuppeteer, setStartActionPuppeteer] = useState(false)
  const [startActionMongoDB, setStartActionMongoDB] = useState(false)

  const ref = useRef()
  const refHtmlCss = useRef()
  const refReactjs = useRef()
  const refRedux = useRef()
  const refJWT = useRef()
  const refNodejs = useRef()
  const refPuppeteer = useRef()
  const refMongodb = useRef()

  useEffect(() => {
    const { offsetTop } = ref.current
    getOffsetTopSkills(offsetTop)
  }, [getOffsetTopSkills])

  // const animationIncrePercent = (speed, progressValue, progressEndValue) => {
  //   let progcess = setTimeout(() => {
  //     setProgressValue((prev) => ({ ...prev, htmlCss: (prev.htmlCss += 1) }))
  //     setProgressValue((prev) => ({ ...prev, reactjs: (prev.reactjs += 1) }))
  //   }, [speed])
  //   if (progressValue >= progressEndValue) {
  //     clearTimeout(progcess)
  //   }
  // }

  const timerIdHTMLCSS = useRef()
  const timerIdReactjs = useRef()
  const timerIdRedux = useRef()
  const timerIdJWT = useRef()
  const timerIdNodejs = useRef()
  const timerIdPuppeteer = useRef()
  const timerIdMongodb = useRef()

  useEffect(() => {
    const { offsetTop, offsetHeight } = ref.current
    const html = refHtmlCss.current
    const reactjs = refReactjs.current
    const redux = refRedux.current
    const jwt = refJWT.current
    const nodejs = refNodejs.current
    const puppeteer = refPuppeteer.current
    const mongodb = refMongodb.current

    const topHTMLCSS = offsetTop + html.offsetTop
    const topReactjs = offsetTop + reactjs.offsetTop
    const topRedux = offsetTop + redux.offsetTop
    const topJWT = offsetTop + jwt.offsetTop
    const topNodejs = offsetTop + nodejs.offsetTop
    const topPuppeteer = offsetTop + puppeteer.offsetTop
    const topMongodb = offsetTop + mongodb.offsetTop

    window.onscroll = function () {
      const topPage = window.scrollY + offsetHeight / 2

      //html
      //scrollY tới phần html-css
      if (topPage >= topHTMLCSS) {
        if (startActionHTMLCSS !== true && counterHTMLCSS < counter.HTMLCSS) {
          setStartActionHTMLCSS(true)
        }
      }
      //reactjs
      //scrollY tới phần reactjs
      if (topPage >= topReactjs) {
        if (startActionReactJS !== true && counterReactJS < counter.ReactJS) {
          setStartActionReactJS(true)
        }
      }
      //redux
      //scrollY tới phần redux
      if (topPage >= topRedux) {
        if (startActionRedux !== true && counterRedux < counter.Redux) {
          setStartActionRedux(true)
        }
      }
      //JWT
      //scrollY tới phần jwt
      if (topPage >= topJWT) {
        if (startActionJWT !== true && counterJWT < counter.JWT) {
          setStartActionJWT(true)
        }
      }
      //nodejs
      //scrollY tới phần nodejs
      if (topPage >= topNodejs) {
        if (startActionNodeJS !== true && counterNodeJS < counter.NodeJS) {
          setStartActionNodeJS(true)
        }
      }
      //puppeteer
      //scrollY tới phần puppeteer
      if (topPage >= topPuppeteer) {
        if (
          startActionPuppeteer !== true &&
          counterPuppeteer < counter.Puppeteer
        ) {
          setStartActionPuppeteer(true)
        }
      }
      //mongodb
      //scrollY tới phần mongodb
      if (topPage >= topMongodb) {
        if (startActionMongoDB !== true && counterMongoDB < counter.MongoDB) {
          setStartActionMongoDB(true)
        }
      }
    }
  }, [
    counter.HTMLCSS,
    counter.JWT,
    counter.MongoDB,
    counter.NodeJS,
    counter.Puppeteer,
    counter.ReactJS,
    counter.Redux,
    counterHTMLCSS,
    counterJWT,
    counterMongoDB,
    counterNodeJS,
    counterPuppeteer,
    counterReactJS,
    counterRedux,
    startActionHTMLCSS,
    startActionJWT,
    startActionMongoDB,
    startActionNodeJS,
    startActionPuppeteer,
    startActionReactJS,
    startActionRedux,
  ])

  // tăng giá trị
  const handleIncrement = (name) => {
    switch (name) {
      case "HTMLCSS":
        timerIdHTMLCSS.current = setInterval(() => {
          setCounterHTMLCSS((prev) => prev + 1)
        }, 10)
        break
      case "ReactJS":
        timerIdReactjs.current = setInterval(() => {
          setCounterReactJS((prev) => prev + 1)
        }, 10)
        break
      case "Redux":
        timerIdRedux.current = setInterval(() => {
          setCounterRedux((prev) => prev + 1)
        }, 10)
        break
      case "JWT":
        timerIdJWT.current = setInterval(() => {
          setCounterJWT((prev) => prev + 1)
        }, 10)
        break
      case "NodeJS":
        timerIdNodejs.current = setInterval(() => {
          setCounterNodeJS((prev) => prev + 1)
        }, 10)
        break
      case "Puppeteer":
        timerIdPuppeteer.current = setInterval(() => {
          setCounterPuppeteer((prev) => prev + 1)
        }, 10)
        break
      case "MongoDB":
        timerIdMongodb.current = setInterval(() => {
          setCounterMongoDB((prev) => prev + 1)
        }, 10)
        break
      default:
        break
    }
  }
  //dừng tăng giá trị
  const handleReduce = (name) => {
    switch (name) {
      case "HTMLCSS":
        clearInterval(timerIdHTMLCSS.current)
        break
      case "ReactJS":
        clearInterval(timerIdReactjs.current)
        break
      case "Redux":
        clearInterval(timerIdRedux.current)
        break
      case "JWT":
        clearInterval(timerIdJWT.current)
        break
      case "NodeJS":
        clearInterval(timerIdNodejs.current)
        break
      case "Puppeteer":
        clearInterval(timerIdPuppeteer.current)
        break
      case "MongoDB":
        clearInterval(timerIdMongodb.current)
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (startActionHTMLCSS) {
      handleIncrement("HTMLCSS")
    } else {
      handleReduce("HTMLCSS")
    }
  }, [startActionHTMLCSS])

  useEffect(() => {
    if (startActionReactJS) {
      handleIncrement("ReactJS")
    } else {
      handleReduce("ReactJS")
    }
  }, [startActionReactJS])

  useEffect(() => {
    if (startActionRedux) {
      handleIncrement("Redux")
    } else {
      handleReduce("Redux")
    }
  }, [startActionRedux])

  useEffect(() => {
    if (startActionJWT) {
      handleIncrement("JWT")
    } else {
      handleReduce("JWT")
    }
  }, [startActionJWT])

  useEffect(() => {
    if (startActionNodeJS) {
      handleIncrement("NodeJS")
    } else {
      handleReduce("NodeJS")
    }
  }, [startActionNodeJS])

  useEffect(() => {
    if (startActionPuppeteer) {
      handleIncrement("Puppeteer")
    } else {
      handleReduce("Puppeteer")
    }
  }, [startActionPuppeteer])

  useEffect(() => {
    if (startActionMongoDB) {
      handleIncrement("MongoDB")
    } else {
      handleReduce("MongoDB")
    }
  }, [startActionMongoDB])

  // console.log("counterHTMLCSS", counterHTMLCSS)
  // console.log("counterReactJS", counterReactJS)
  // console.log("startActionHTMLCSS", startActionHTMLCSS)
  // console.log("startActionReactJS", startActionReactJS)

  useEffect(() => {
    if (counterHTMLCSS >= counter.HTMLCSS) {
      setStartActionHTMLCSS(false)
    }
  }, [counter.HTMLCSS, counterHTMLCSS])

  useEffect(() => {
    if (counterReactJS >= counter.ReactJS) {
      setStartActionReactJS(false)
    }
  }, [counter.ReactJS, counterReactJS])

  useEffect(() => {
    if (counterRedux >= counter.Redux) {
      setStartActionRedux(false)
    }
  }, [counter.Redux, counterRedux])

  useEffect(() => {
    if (counterJWT >= counter.JWT) {
      setStartActionJWT(false)
    }
  }, [counter.JWT, counterJWT])

  useEffect(() => {
    if (counterNodeJS >= counter.NodeJS) {
      setStartActionNodeJS(false)
    }
  }, [counter.NodeJS, counterNodeJS])

  useEffect(() => {
    if (counterPuppeteer >= counter.Puppeteer) {
      setStartActionPuppeteer(false)
    }
  }, [counter.Puppeteer, counterPuppeteer])

  useEffect(() => {
    if (counterMongoDB >= counter.MongoDB) {
      setStartActionMongoDB(false)
    }
  }, [counter.MongoDB, counterMongoDB])

  return (
    <Container className="skills" ref={ref}>
      <HideInput id="skills" />
      <Title text="Skills" />
      <WrapperSkills id="skills">
        <Wrapper>
          {imgSkill.map((item, index) => (
            <Left
              key={index}
              column={item.column}
              row={item.row}
              data-aos="fade-up"
              ref={
                item !== "" && item.name === "HTML-CSS"
                  ? refHtmlCss
                  : item.name === "ReactJS"
                  ? refReactjs
                  : item.name === "Redux"
                  ? refRedux
                  : item.name === "Json Web Token"
                  ? refJWT
                  : item.name === "NodeJS"
                  ? refNodejs
                  : item.name === "Puppeteer"
                  ? refPuppeteer
                  : refMongodb
              }
            >
              {item.img !== "" ? (
                <WrapperCard>
                  <Card>
                    <Box turn={item.turn}>
                      <Circle
                        value={
                          item !== "" && item.name === "HTML-CSS"
                            ? counterHTMLCSS
                            : item.name === "ReactJS"
                            ? counterReactJS
                            : item.name === "Redux"
                            ? counterRedux
                            : item.name === "Json Web Token"
                            ? counterJWT
                            : item.name === "NodeJS"
                            ? counterNodeJS
                            : item.name === "Puppeteer"
                            ? counterPuppeteer
                            : counterMongoDB
                        }
                      >
                        <Percent>
                          {item !== "" && item.name === "HTML-CSS"
                            ? counterHTMLCSS
                            : item.name === "ReactJS"
                            ? counterReactJS
                            : item.name === "Redux"
                            ? counterRedux
                            : item.name === "Json Web Token"
                            ? counterJWT
                            : item.name === "NodeJS"
                            ? counterNodeJS
                            : item.name === "Puppeteer"
                            ? counterPuppeteer
                            : counterMongoDB}
                          %
                        </Percent>
                      </Circle>
                    </Box>

                    <WrapperText turn={item.turn}>
                      {" "}
                      <Image src={item.img} turn={item.turn} />
                      <Text turn={item.turn}>
                        {" "}
                        <HighLight>{item.name}</HighLight> {item.content}{" "}
                      </Text>
                    </WrapperText>
                  </Card>
                </WrapperCard>
              ) : (
                ""
              )}
            </Left>
          ))}
        </Wrapper>
      </WrapperSkills>
    </Container>
  )
}

export default Skills
