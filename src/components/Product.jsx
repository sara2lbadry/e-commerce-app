import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    
`
const Circle = styled.div`
    
`
const Image = styled.div`
    
`
const Info = styled.div`
    
`
const Icon = styled.div`
    
`
function Product({item}) {
  return (
    <Container>
        <Circle/>
        <Image src = {item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
