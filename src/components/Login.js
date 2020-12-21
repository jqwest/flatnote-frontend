import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const reqObj = {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json',
	            'Accept': 'application/json'
	        },
	        body: JSON.stringify(this.state)
        }
        
        fetch('https://still-sands-32046.herokuapp.com/login', reqObj)
		.then( resp => resp.json())
		.then( user => {
			if (!user.error) {
				this.props.history.push('/dashboard')
			} else {
				alert(user.error)
            }
            localStorage.setItem('token', JSON.stringify(this.state))
            this.props.history.push('/dashboard')
        })
    }

    render() {
        console.log(this.props);
        const { username, password } = this.state
        return (
            <Form bg="light" expand="lg" onSubmit={this.handleSubmit}>
                <br></br>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                        <Col xs={7}>
                        <Form.Control 
                            type="username" 
                            placeholder="Enter username"
                            onChange={this.handleChange} 
                            value={username}
                            name='username'
                        />
                        </Col>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <Col xs={7}>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"
                        onChange={this.handleChange} 
                        value={password} 
                        name='password'
                    />
                    </Col>
                </Form.Group>
                <Button 
                    bg="light" expand="lg"
                    variant="primary" 
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        )
    }
}