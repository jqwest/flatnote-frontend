import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export class UserControls extends Component {
    render() {
        return (
            <div className="user-controls">
                <button className="login">LOG IN</button>
                <button className="signup">SIGN UP</button>
          </div>
        )
    }
}

export default UserControls
