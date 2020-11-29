import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.history.push('/dashboard')
        this.props.handleSubmit(e)
    }

    render() {
        return (
            <Form onSubmit={this.submitLogin}>
                <Form.Text className="text-muted">
                    Welome to Flatnote. Please login in to continue
                </Form.Text>
                <br></br>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="username" 
                        placeholder="Enter username"
                        onChange={(event) => this.handleInputChange(event, this.state.username)} value={this.state.username} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
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
// }

// orm >
//                 <div>
//                 <p>Sign in</p>
//                     <label>Username</label>
//                     <input
//                         name='username'
//                         type='text'
//                         placeholder='username'
//                         onChange={this.handleChange}
//                         value={this.state.username}
//                     />
//                 </div>

//                 <div>
//                     <label>Password</label>
//                     <input
//                         name='password'
//                         type='password'
//                         placeholder='password'
//                         onChange={this.handleChange}
//                         value={this.state.password}
//                     />
//                 </div>
//                 <button type='submit'>Submit</button>