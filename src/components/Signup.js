import React, { Component } from 'react'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        if (this.state.password === this.state.passwordConfirmation) {
            fetch("http://localhost:3000/signup",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then( resp => resp.json())
            .then( response => {
                if(response.errors){
                    alert(response.errors)
                } else {
                    this.props.setUser(response)
                }
            })
        } else {
            alert("Passwords don't match!")
        }
    }


    render() {
        return (
            <div className="center-form">
                <form className="signup-form"
                    onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text" 
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        required
                    />
                     <input 
                        onChange={this.handleChange}
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        required
                    />
                     <input 
                        onChange={this.handleChange}
                        type="password"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        placeholder="Confirm Password"
                        required
                    />
                    <button 
                        className="singup"
                        type="submit"
                        >Sign Up</button>
                </form>
            </div>
            
        )
    }
}

export default Signup
