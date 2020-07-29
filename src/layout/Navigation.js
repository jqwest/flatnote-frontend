import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import SignedInLinks from '../layout/SignedInLinks'
import SignedOutLinks from './SignedOutLinks';

const Navigation = (props) => {
  console.log('navbar', props);
    return (
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
            { !props.currentUser ? <SignedInLinks /> : <SignedOutLinks logout={props.logout}/>}
      </Navbar>
    )
}

export default Navigation
