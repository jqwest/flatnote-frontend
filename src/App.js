import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './layout/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NewNote from './components/NewNote';

import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      isLoggedIn: false,
    }

  }
    
    

  componentDidMount(){
    const token = localStorage.token

    if(token){
      //get user info
      fetch("http://localhost:3000/login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
    }
  }

  setUser = response => {
    this.setState({
      currentUser: response
    })
  }

  login = (response) => {
    // const { currentUser, isLoggedIn } = this.state;
    this.setState({
      currentUser: response.user,
      isLoggedIn: true
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/")
    })
  }

  logout = () => {
    this.setState({
      currentUser: null,
      isLoggedIn: false
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/")
    })
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value.toUpperCase()
    })
  }
  


  render(){
    console.log("user", this.state.currentUser);
    // console.log(this.props);

    
  return (
      <div className="note-app container">
      <Navigation
        isLoggedIn={this.state.isLoggedIn} 
        currentUser={this.state.currentUser} 
        logout={this.logout} 
        handleChange={this.handleChange} />
        {/* <NotesContainer currentUser={this.state.currentUser} /> */}
        <Switch>
          <Route path='/home' render={() => <Home message={this.message} /> } />
          
          <Route path='/login' render={() => <Login login={this.login} /> } />
          
          <Route path='/signup' render={() => <Signup login={this.login}/>} />

          <Route path='/newnote' component={NewNote} />
          
        </Switch>
      </div>
  );}
}

export default App;