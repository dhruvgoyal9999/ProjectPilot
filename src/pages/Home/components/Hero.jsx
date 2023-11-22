import React from 'react'
import styled from 'styled-components'
import DemoImage from "../../../Images/AddProject.gif"
import HeaderImage from "../../../Images/Header.png"

const Container = styled.div`
  height: 80vh;
  margin: 6px 14px;
  max-width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px 12px 30px 12px!important;
    height: 70vh;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const TitleTag = styled.div`
  font-size: 58px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  font-weight: 800;
  color: white;
`
const DescriptiveTag = styled.p`
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  font-weight: 300;
  margin-bottom: 32px;  
  line-height: 1.5;
  color: white};
`
const Button = styled.button`
  width: 50%;
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(76.35deg, white 15.89%, white 89.75%);
  color: #00aaff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 1250px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 16px;
  }
`
const Image = styled.img`
width: 500px;
height: 500px;
  flex: 0.8;
  display: flex;
  object-fit: scale-down;
  border-radius: 10px;
  @media (max-width: 1000px) {
    display: none;
  }
`

const Hero = ({ setSignInOpen }) => {
  return (
    <Container id="home">
      <Left>
        <TitleTag><b>Elevate And Manage Your Projects Using ProjectPilot</b></TitleTag>
        <DescriptiveTag>Streamline project navigation with intuitive planning, seamless collaboration, and real-time tracking. It empowers teams to efficiently pilot their projects to success with precision and control.</DescriptiveTag>
        <Button onClick={() => setSignInOpen(true)}>Create New Project</Button>
      </Left>
      <Image src={HeaderImage} />
    </Container>
  )
}

export default Hero