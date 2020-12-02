import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const LogoutButton = (props) => {
    return (
       <Button onClick={props.onClick}>
           Logout
       </Button>
    )
}

export default LogoutButton
