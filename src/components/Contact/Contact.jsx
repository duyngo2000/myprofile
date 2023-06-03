import {
  PhoneEnabledOutlined,
  EmailOutlined,
  Facebook,
  LocationOnOutlined,
  SendOutlined,
} from "@material-ui/icons"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import HideInput from "../Contants/HideInput"
import { moblie } from "../Contants/sizeScreen"
import Title from "../Contants/Title"

const Container = styled.div`
  background-color: #717086;
  height: 100vh;
  position: relative;

  @media screen and (max-width: ${moblie}) {
    height: auto;
    padding-bottom: 30px;
  }
`
const WrapperContent = styled.div`
  width: 1000px;
  height: calc(100% - 76px * 2);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: ${moblie}) {
    flex-direction: column;
    width: 100%;
  }
`
const FormSubmit = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${moblie}) {
    width: 100%;
  }
`
const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 50px 20px;
  background-color: #222222;
  border-radius: 8px;

  @media screen and (max-width: ${moblie}) {
    margin: 0 20px;
  }
`
const Input = styled.input`
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  padding: 12px 16px;
  outline: none;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #e4e4e4;
`
const TextArea = styled.textarea`
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  padding: 12px 16px;
  outline: none;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #e4e4e4;
`
const Button = styled.button`
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  border: 1px solid #02d3f3;
  background-color: #02d3f3;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-radius: 8px;
  transition: all 0.5s;
  :hover {
    cursor: pointer;
    border: 1px solid #fff;
    background-color: #fff;
    color: #02d3f3;
    box-shadow: 0 0 35px #02d3f3;
  }
`
const ContentText = styled.div`
  flex: 2;
  @media screen and (max-width: ${moblie}) {
    width: 100%;
  }
`
const Menu = styled.ul`
  list-style: none;

  @media screen and (max-width: ${moblie}) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`
const Item = styled.li`
  color: #fff;
  margin: 10px 0;
  margin-left: ${(prop) => prop.marginLeft};
  line-height: 4rem;

  @media screen and (max-width: ${moblie}) {
    margin-left: 10px;
  }
`
const Text = styled.span`
  font-size: 18px !important;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: ${moblie}) {
    :hover {
      transform: scale(1);
      margin-left: 20px;
    }
  }
`
const styleIcon = {
  border: "1px solid #ccc",
  padding: "5px",
  borderRadius: "50%",
  background: "#fff",
  color: "#000",
  marginRight: "5px",
}

const linkFollow = [
  {
    name: "Zalo",
    icon: <SendOutlined style={styleIcon} />,
    link: "Facebook",
    marginLeft: "100px",
  },
  {
    name: "Xuân Hòa, Kế Sách, Sóc Trăng",
    icon: <LocationOnOutlined style={styleIcon} />,
    link: "Zalo",
    marginLeft: "50px",
  },
  {
    name: "duynbabylon@gmail.com",
    icon: <EmailOutlined style={styleIcon} />,
    link: "Facebook",
    marginLeft: "0px",
  },
  {
    name: "Facebook",
    icon: <Facebook style={styleIcon} />,
    link: "Facebook",
    marginLeft: "50px",
  },
  {
    name: "0769 757 250",
    icon: <PhoneEnabledOutlined style={styleIcon} />,
    link: "Facebook",
    marginLeft: "100px",
  },
]
const Contact = ({ getOffsetTopContact }) => {
  const ref = useRef()

  useEffect(() => {
    const { offsetTop } = ref.current
    getOffsetTopContact(offsetTop)
  }, [getOffsetTopContact])
  return (
    <Container ref={ref}>
      <HideInput id="contact" />
      <Title text="Contact" id="contacts" />
      <WrapperContent>
        <ContentText>
          <Menu>
            {linkFollow.map((item) => (
              <Item
                key={item.name}
                marginLeft={item.marginLeft}
                data-aos="fade-right"
              >
                <Text>
                  {item.icon}
                  {item.name}
                </Text>
              </Item>
            ))}
          </Menu>
        </ContentText>
        <FormSubmit>
          <Form data-aos="fade-right">
            <Input placeholder="Your Name" row="1/2" column="1/3" />
            <Input placeholder="Your Email" row="1/2" column="3/5" />
            <TextArea placeholder="Your Message" row="2/5" column="1/5" />
            <Button type="submit" row="5/6" column="4/5">
              Send
            </Button>
          </Form>
        </FormSubmit>
      </WrapperContent>
    </Container>
  )
}

export default Contact
