import styled from "styled-components"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    
`
const Title = styled.h1`
    
`
const Form = styled.form`
    
`
const Input = styled.input`
    
`
const Button = styled.button`
    
`

const Link = styled.a`
    
`
function Login() {
  return (
    <Container>
         <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>LOgIn</Button>
                <Link>DON'T REMEMBER PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNET</Link>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Login
