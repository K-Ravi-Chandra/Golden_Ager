import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Navigation() {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand as={Link} to="/">Golden Ager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <NavDropdown title="Donate" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/Golden_Ager/Donate/money">Donate Money</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Golden_Ager/Donate/requirements">Donate Requirements</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="ms-auto">
                        <Button as={Link} to="/Golden_Ager/login" variant="outline-primary">Log in</Button>{' '}
                        <Button variant="light"></Button>
                        <Button as={Link} to="/Golden_Ager/signup" variant="primary">Sign up</Button>{' '}

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
