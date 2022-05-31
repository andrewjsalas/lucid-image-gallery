import { Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
  return (
    <>
    <Container>
      <Nav className='nav container-fluid justify-content-center nav-list'>

        <LinkContainer to='/'>
          <Nav.Link className='nav-link active mx-2'>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to='about' >
          <Nav.Link className='mx-2' >About</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
      
    </>
  )
}

export default Navigation