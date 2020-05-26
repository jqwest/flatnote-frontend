import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const API = 'http://localhost:3000/'
class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  setUser = user => {
    this.setState({
      currentUser: user
    }, () => {this.props.history.push("/home")})
  }



  handleChange = e => {
    this.setState({
      searchTerm: e.target.value.toUpperCase()
    })
  }

  render(){
  return (
    <BrowserRouter>
      <div className="note-app container">
      <Navbar handleChange={this.handleChange} />
        <h1 className="center red-text">Notes</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' render={ (props) => <Login {...props} handleUserLogin={this.handleUserLogin} /> } /> 
          <Route path='/signup' render={ (props) => <Signup {... props} setUser={this.setUser} />} />
          </Switch>
      </div>
    </BrowserRouter>
  );}
}

export default App;












// coponentDidMount = () => {
//   this.fetchUsers()
//   this.fetchNotes()
// }

// fetchUsers = () => {
//   fetch(API + "users")
//   .then( resp => resp.json())
//   .then( users => this.setState({
//     users: users
//   }))
// }

// fetchNotes = () => {
//   fetch('http://localhost:3000/notes')
//   .then( resp => resp.json())
//   .then( notes => this.setState({
//     notes: notes
//   }))
// }

// handleUserLogin = (userLogin) => {
//   const reqObj = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userLogin)
//   }

//   fetch('http://localhost:3000/login', reqObj)
//   .then(resp => resp.json())
//   .then(user => {
//     this.setState({
//       loggedInUser: user
//     });
//   })