import React from 'react';
import UserControls from './UserControls';
import HomeButton from './HomeButton';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

const MainNavbar = props => {
    console.log(props);

    return (
      <Navbar bg="dark" variant="dark">
        <Link to="/home">Flatnote</Link>
        Welcome { 
          props.isLoggedIn ? props.currentUser.username : 'Please login or Create an Account to Continue'
      }
          <Nav className="mr-auto">
          {
            props.isLoggedIn ? <Link to="/newnote">New Note</Link> : null

          }
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            {props.isLoggedIn ? <Link to="/home">Log Out</Link> : null
            }
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
      </Form> */}
  </Navbar>
    )
}

export default MainNavbar;


// {/* <div className="navbar">
// <div className="top">
//     <HomeButton />
//     Welcome { 
//         props.isLoggedIn ? props.currentUser.username : 'Please login or Create an Account to Continue'
//     }
//     {/* <SearchBar handleChange={props.handleChange} searchTerm={props.searchTerm}/> */}
//     <UserControls logout={props.logout} currentUser={props.currentUser} />
// </div>
// <div className="bottom">
//     {/* <FilterBar cardMode={props.cardMode} listMode={props.listMode}/> */}
// </div>
// </div> */}