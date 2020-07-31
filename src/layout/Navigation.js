import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import SignedInLinks from '../layout/SignedInLinks'
import SignedOutLinks from './SignedOutLinks';
import Button from 'react-bootstrap/Button'

const Navigation = (props) => {
  console.log('navbar', props);
    return (
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
            { !props.currentUser ? <SignedInLinks logout={props.logout}/> : <SignedOutLinks />}
          <Button onClick={()=> props.logout} className='logout' type='submit' >Log Out</Button>

      </Navbar>
    )
}

export default Navigation
