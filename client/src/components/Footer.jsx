import { Facebook, Instagram, LocationOn, MailOutline, Phone, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    background-color: #183153;
    color: white;
    padding-top: 1.1rem;

    ${mobile({
        flexDirection:"column"
    })}
`
const Logo = styled.h1`
    font-size: 1.8rem;
    
`
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 1rem;
    line-height: 24px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #c3c6d1;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({
        display:"none"
    })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({
        backgroundColor:"#f5f5f5"
    })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 30%;
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
                <SocialIcon color="183153">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="183153">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="183153">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="183153">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>

        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Oeder Tracking</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOn style={{marginRight: "10px", color: "#c3c6d1"}}/>
                622 lorm ipsum, South 38622
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px" , color: "#c3c6d1"}}/>
                +1 234 56 789
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px" , color: "#c3c6d1"}}/>
                contact@lune.dev
            </ContactItem>
            <Payment  src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer