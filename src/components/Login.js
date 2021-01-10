import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const API = 'http://localhost:3000/'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  omponentDidMount(){

    const token = localStorage.getItem('token')
    if (!token) {
      this.props.history.push('/')
    } else {
      const reqObj = {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        },
      };
      fetch(`${API}/current_user`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          this.props.updateUser(data)
        })
        .catch(err => console.log(err))
    }
  }

  handleSubmit = (e, props) => {
    e.preventDefault();

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(this.state),
    };

    fetch(`${API}/login`, reqObj)
      .then((resp) => resp.json())
      .then((user) => {
          if(user.error){
              alert(user.error)
          } else {
            console.log(user.user);
            this.props.updateUser(user);
            localStorage.setItem('token', user.token);
            this.props.history.push('/dashboard');
          }
      })
      .catch((err) => console.log(err));
  };

  
  render() {
    // console.log(this.props);
    const { username, password } = this.state;
    return (
      <Form 
        bg="light" 
        expand="lg" 
        onSubmit={(e, props) => this.handleSubmit(e, this.props)} >
        <br></br>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Col xs={7}>
            <Form.Control
              type="username"
              placeholder="Enter username"
              onChange={this.handleChange}
              value={username}
              name="username"
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
              name="password"
            />
          </Col>
        </Form.Group>
        <Button bg="light" expand="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
