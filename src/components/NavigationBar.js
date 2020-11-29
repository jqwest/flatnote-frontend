import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



export default class NavigationBar extends Component {
    state = {
        activeItem: 'home'
    }

    handleLogout = () => {
        this.props.restUser()
        this.props.history.push('/login')
    }

    render() {
        const {activeItem } = this.state

        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand 
                    as={Link}
                    to='/home'
                    >Flat Note</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link 
                        as={ Link } 
                        active={activeItem === 'home'}
                        to='/dashboard'
                        >Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
