import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Navbar';

export default class NavigationBar extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
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
                                <Nav.Item><Nav.Link as={Link}
                                to="/dashboard" >Dashboard</Nav.Link></Nav.Item>
                                <Nav.Item><Button className="logout-btn" variant="link" onClick={(e) => this.props.handleLogout(e)}>Log Out</Button></Nav.Item>
                                <Button as={Link} to='/newnote'className='new-note'>Create New Note</Button>
                            </Nav>
                            )
                            :
                            (
                            <Nav className="ml-auto">
                                Welcome to Flatnote Please Login or Sign up to to Continue
                                <Nav.Item><Nav.Link as={Link} to="/login">Log In</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/signup">Sign up</Nav.Link></Nav.Item>
                            </Nav>
                )
              }
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}






