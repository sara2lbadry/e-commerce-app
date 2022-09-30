import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import {sliderItems} from '../data'

import {mobile} from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: #CBD9CE; */
    position: relative;
    overflow: hidden;

    ${mobile({
        display:"none"
    })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f5f3f3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.slideInex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

function Slider() {
    const [slideInex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideInex > 0 ? slideInex - 1 : 2)
        } else {
            setSlideIndex(slideInex < 2 ? slideInex + 1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction = 'left' onClick={() => handleClick('left')}>
            <KeyboardArrowLeftOutlined />
        </Arrow>
        <Wrapper slideInex = {slideInex}>
            {sliderItems.map(item => (
                <Slide bg={item.bg} key={item.id}>
                  <ImgContainer>
                      <Image src={item.img}/>
                  </ImgContainer>
                  <InfoContainer>
                      <Title>{item.title}</Title>
                      <Description>{item.desc}</Description>
                      <Button>Shop Now</Button>
                  </InfoContainer>
                </Slide>

            ))}
          

        </Wrapper>
        <Arrow direction = 'right' onClick={() => handleClick('right')}>
            <KeyboardArrowRightOutlined />
        </Arrow>
        
    </Container>
  )
}

export default Slider