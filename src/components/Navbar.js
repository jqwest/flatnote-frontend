import React from 'react'

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper red bg-darken-3">
            <div className="container">
                <a href="/" className="brand-logo-right">Flat Note</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/new note">New Note</a></li>
                    <li><a href="/login">login</a></li> 
                </ul>
            </div>
        </nav>
    )
}

export default Navbar