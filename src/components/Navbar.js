import React from 'react';
// import UserControls from './UserControls';

const Navbar = props => {

    return(
        <nav className="nav-wrapper red bg-darken-3">
            <div className="container">
            {/* <UserControls /> */}
                <a href="/" className="brand-logo-right">Flat Note</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/new note">New Note</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li> 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;