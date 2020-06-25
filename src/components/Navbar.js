import React from 'react';
import UserControls from './UserControls';
import HomeButton from './HomeButton';
// import SearchBar from './SearchBar';


const Navbar = props => {
    console.log(props);

    return(
        
        <div className="navbar">
            <div className="top">
                <HomeButton />
                Welcome { 
                    props.isLoggedIn ? props.currentUser.username : 'Please login or Create an Account'
                }
                {/* <SearchBar handleChange={props.handleChange} searchTerm={props.searchTerm}/> */}
                <UserControls logout={props.logout} currentUser={props.currentUser} />
            </div>
            <div className="bottom">
                {/* <FilterBar cardMode={props.cardMode} listMode={props.listMode}/> */}
            </div>
      </div>

    )
     
}

export default Navbar;
