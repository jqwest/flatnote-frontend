import React from 'react'

class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
            })
            .then(resp => resp.json())
            .then(user => {
                if (user.errors){
                  alert(user.errors)
                } else {
                this.props.login(user)
            }
        }) 
    }
    
    render() {
        return (
            <div>
            <h3>Log In</h3>
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

