import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"
import Shopping from '../assets/shopping.png'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #CBD9CE;
    position: relative;
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
`
const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
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
    
`
const Description = styled.p`
    
`
const Button = styled.button`
    
`

function Slider() {
  return (
    <Container>
        <Arrow direction = 'left'>
            <KeyboardArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src={Shopping}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Summer Sale</Title>
                    <Description>Get 30% OFF For New Arrivals.</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction = 'right'>
            <KeyboardArrowRightOutlined />
        </Arrow>
        
    </Container>
  )
}

export default Slider