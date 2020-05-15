import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username)
        this.props.hideForm()
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmie}>
                    <input name={'username'} onChange={this.handleChange}/>
                    <input type='subnmit' value='login' />
                </form>
            </div>
        )
    }
}

export default Login
