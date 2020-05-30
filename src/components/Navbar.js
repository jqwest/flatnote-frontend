import React from 'react'

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            showLogin: false,
            showSignup: false
        }
    }

    render() {
    return(
        <nav className="nav-wrapper red bg-darken-3">
            <div className="container">
                <a href="/" className="brand-logo-right">Flat Note</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/newnote">New Note</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li> 
                </ul>
            </div>
        </nav>
        )
    }
}

export default Navbar;