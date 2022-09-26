import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    
`
const SocialContainer = styled.div`
    
`
const SocialIcon = styled.div`
    
`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
function Footer() {
  return (
    <Container>
        <Left>
            <Logo>LUNE.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cum, ex eos animi blanditiis beatae doloribus repellendus debitis 
                odit quasi ratione? Iure libero accusantium reprehenderit nobis 
                fugiat, nam enim tenetur assumenda!
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
                <SocialIcon>
                    <Twitter />
                </SocialIcon>
                <SocialIcon>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>

        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer