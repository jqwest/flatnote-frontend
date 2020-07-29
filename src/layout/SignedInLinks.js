import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const SignedInLinks = () => {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button>Log Out</Button>
        </Nav>
    )
}

export default SignedInLinks
