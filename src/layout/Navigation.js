import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import SignedInLinks from '../layout/SignedInLinks'
import SignedOutLinks from './SignedOutLinks';

const Navigation = (props) => {
  console.log('navbar', props);
    return (
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
            { props.currentUser ? <SignedInLinks /> : <SignedOutLinks />}
            <Button>Log Out</Button>
      </Navbar>
    )
}

export default Navigation
