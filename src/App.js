import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NewNote from './components/NewNote';
import NotesContainer from './components/NotesContainer';
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        currentUser: null,
        isLoggedIn: false
    }
  }
    

  componentDidMount(){
    const token = localStorage.token

    if(token){
      //get user info
      fetch("http://localhost:3000/auto_login", {
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

  login = (response) => {
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
      this.props.history.push("/login")
    })
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value.toUpperCase()
    })
  }
  


  render(){
    // console.log("user", this.state.currentUser);
    // console.log(this.props);
    
  return (
      <div className="note-app container">
      <MainNavbar
        isLoggedIn={this.state.isLoggedIn} 
        currentUser={this.state.currentUser} 
        logout={this.logout} 
        handleChange={this.handleChange} />
        <h1 className="center red-text">Notes</h1>
        <NotesContainer />
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