import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { sessions } from '../data/sessionDB'

const NavBar = () => {
  function totalSession (sessions) {
    const sessionNumbers = []
    for (const i in sessions) {
      sessionNumbers.push(sessions[i].session)
    }

    const totalLink = Math.max(...sessionNumbers)
    const result = []
    for (let i = 0; i < totalLink; i++) {
      result.push({
        href: '/session/' + (i + 1),
        linkname: 'Session ' + (i + 1)
      })
    }
    return result
  }

  const Links = totalSession(sessions)

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
              {Links.map(link => {
                return (<NavDropdown.Item key={crypto.randomUUID()} href={link.href}>{link.linkname}</NavDropdown.Item>)
              })}
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
