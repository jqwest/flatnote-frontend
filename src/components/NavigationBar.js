import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Navbar';

export const NavigationBar = (props) => {
    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand 
                    as={Link}
                    to='/home'
                    >Flat Note</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {localStorage.token ?
                    (
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/dashboard" >Dashboard</Nav.Link></Nav.Item>
                            <Nav.Item><Button className="logout-btn" variant="link" onClick={(e) => props.handleLogOut()}>Log Out</Button></Nav.Item>
                        </Nav>
                        )
                        :
                        (
                        <Nav className="ml-auto">
                            Welcome to Flatnote Please Login to Continue
                            <Nav.Item><Nav.Link href="/login">Log In</Nav.Link></Nav.Item>
                        </Nav>
            )
          }
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavigationBar;