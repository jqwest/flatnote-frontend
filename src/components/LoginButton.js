import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';


const LoginButton = (props) => {
    return (
        <Button 
            as={Link}
            to='/login'>
            Login
        </Button>
    )
}

export default LoginButton
