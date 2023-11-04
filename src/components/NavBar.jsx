import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  useEffect(() => {
    console.log("NavBar Mount or Update,Why the react-bootstrap/Navbar don't use Link ???")
  }, [])

  return (
    <Navbar data-bs-theme="dark" expand="lg" sticky="top" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">My React Class</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <NavDropdown title="Session" id="basic-nav-dropdown">
              <NavDropdown.Item href="/session/1">Session 1</NavDropdown.Item>
              <NavDropdown.Item href="/session/2">Session 2</NavDropdown.Item>
              <NavDropdown.Item href="/session/3">Session 3</NavDropdown.Item>
              <NavDropdown.Item href="/session/4">Session 4</NavDropdown.Item>
              <NavDropdown.Item href="/session/5">Session 5</NavDropdown.Item>
              <NavDropdown.Item href="/session/6">Session 6</NavDropdown.Item>
              <NavDropdown.Item href="/session/7">Session 7</NavDropdown.Item>
              <NavDropdown.Item href="/session/8">Session 8</NavDropdown.Item>
              <NavDropdown.Item href="/session/9">Session 9</NavDropdown.Item>
              <NavDropdown.Item href="/session/10">Session 10</NavDropdown.Item>
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
