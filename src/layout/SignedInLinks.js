import React from 'react'
import Nav from 'react-bootstrap/Nav';

const SignedInLinks = (props) => {
    console.log(props);
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    )
}

export default SignedInLinks
