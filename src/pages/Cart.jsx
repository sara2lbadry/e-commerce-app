import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

const Container = styled.div`
    
`
function Cart() {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Footer />
      
    </Container>
  )
}

export default Cart
