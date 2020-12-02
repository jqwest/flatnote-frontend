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
        e.preventDefault();

        this.props.handleLogin(this.state)
        this.setState({
            username: '',
            password: '',
        })
        this.props.history.push('/home')
    }

    render() {
        console.log(this.props);
        const { username, password } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
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
                    variant="primary" 
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        )
    }
}