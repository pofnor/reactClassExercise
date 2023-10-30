import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  
  return (
    <Navbar data-bs-theme="dark" expand="lg" sticky="top" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">My React Class</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <NavDropdown title="Session" id="basic-nav-dropdown">
              <NavDropdown.Item href="/s1">Session 1</NavDropdown.Item>
              <NavDropdown.Item href="/s2">Session 2</NavDropdown.Item>              
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
