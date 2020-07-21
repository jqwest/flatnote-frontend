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
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className='form-group'>
                    <label>Username</label>
                    <input
                        className='form-control'
                        name='username' 
                        type="text" 
                        placeholder="username" 
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        className='form-control' 
                        name='password' 
                        type="password" 
                        placeholder="password" 
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </div>
                <p/>
                <button type='submit' className='btn btn-primary btn-block'>Submit</button>
            </form>
        )
    }
}

export default Login

