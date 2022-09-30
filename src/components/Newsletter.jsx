import { Send } from "@mui/icons-material"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 70vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;

    ${mobile({
        textAlign:"center"
    })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

    ${mobile({
        width:"80%"
    })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: whitesmoke;
`
function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder = "Your email"/>
            <Button>
                <Send></Send>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter