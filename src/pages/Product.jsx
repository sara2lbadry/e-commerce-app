import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div`

`
const Wrapper = styled.div`
    
`
const ImgContainer = styled.div`
    
`
const Image = styled.img`
    
`
const InfoContainer = styled.div`
    
`
const Title = styled.h1`
    
`
const Desc = styled.p`
    
`
const Price = styled.span`
    
`
function Product() {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src = "https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                </Desc>
                <Price></Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      
    </Container>
  )
}

export default Product
