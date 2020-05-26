import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    render() {
        return (
            <div>
            <h3>Sign in</h3>
            <form onSubmit={this.handleSubmit} >
                <input 
                    name='username' 
                    type="text" 
                    placeholder="username" 
                    onChange={this.handleChange}
                    value={this.state.username}
                />
                <input 
                    name='password' 
                    type="password" 
                    placeholder="password" 
                    onChange={this.handleChange}
                    value={this.state.password}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                />
            </form>
        </div>
        )
    }
}

export default Login
