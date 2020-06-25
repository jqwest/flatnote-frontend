import React from 'react';
import { Link } from 'react-router-dom';

function HomeButton() {
    return (
        <Link to='/notes'>
            <div className="home-button">
                <img src="./round_home_black_18dp.png" alt="reddet icon" className="logo"/>
            </div>
        </Link>
    )
}

export default HomeButton
