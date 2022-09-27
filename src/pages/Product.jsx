import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 20px;
`
const FilterContainer = styled.div`
    
`
const Filter = styled.div`
    
`
const FilterTitle = styled.div`
    
`
const FilterColor = styled.div`
    
`
const FilterSize = styled.div`
    
`
const FilterSizeOption = styled.div`
    
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
                <Price>$ 30</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color = "black"/>
                        <FilterColor color = "darkblue"/>
                        <FilterColor color = "gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      
    </Container>
  )
}

export default Product
