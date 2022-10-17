import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 70vh;
    background-color: #f0f1f3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
    color: #183153;
`
const Description = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgb(95 105 125);
    margin-bottom: 20px;

    ${mobile({
        textAlign:"center"
    })}
`
const InputContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${mobile({
        width:"80%"
    })}
`
const Input = styled.input`
    flex: 8;
    padding: 15px 40px; 
    margin-bottom: 15px;
    border: 1px solid lightgray;
    width: 100%;
    border-radius: 0.4rem;

`
const Button = styled.button`
    flex: 1;
    border: none;
    background: transparent;
    color: #183153;
    padding: 0.6rem 1.4rem;
    width: fit-content;
    border: 2px solid #1f252b;
    border-radius: 0.9rem;
    color: #183153;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        padding: 0.6rem 1.6rem;
        
    }

`
function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder = "Your email"/>
            <Button>
                Submit
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter