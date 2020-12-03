import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state, [e.target.name]: e.target.value
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
        
        fetch('http://localhost:3000/users', reqObj)
		.then( resp => resp.json())
		.then( user => {
			if (!user.error) {
				this.props.history.push('/dashboard')
			} else {
				alert(user.error)
				this.resetForm()
			}
        })
    }
        
        resetForm = () => {
            this.setState({
                username: '',
                password: '',
            })
        }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='username'>
                    <Form.Label>Username</Form.Label>
                        <Col xs={7}>
                            <Form.Control
                                type='username'
                                placeholder='Enter a Username'
                                onChange={this.handleChange}
                                value={this.state.username}
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
                                value={this.state.password} 
                                name='password'
                            />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Create Account
                    </Button>
            </Form>
        )
    }
}
