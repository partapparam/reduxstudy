import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { LinkContainer } from "react-router-bootstrap"

export const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Home Page</Navbar.Brand>
        </LinkContainer>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        {/* <Nav className="me-auto">
            <LinkContainer to="login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <NavDropdown id="collapsible-nav-dropdown" title="Dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <LinkContainer to="/">
                <NavDropdown.Item>back To home</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}
