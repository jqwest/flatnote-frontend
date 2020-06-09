import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserControls extends Component {
    render() {
        return (
            <div className="user-controls">
                <link to="/login"><button className="login">Log In</button> </link>

                <link to="/signup"><button className="signup">Sign UP</button> </link>

                <button>
                    <span 
                        role="img" 
                        aria-label="user-controls">{props.currentUser ? props.currentUser.username : "user"}
                    </span>
                </button>
            </div>
                
        )
    }
}

export default UserControls
