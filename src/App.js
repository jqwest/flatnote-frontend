import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './layout/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NewNote from './components/NewNote';
import './App.css'

class App extends Component {

    state = {
      currentUser: null,
      isLoggedIn: false,
    }

  componentDidMount(){
    this.fetchToken();
  }

  fetchToken = () => {
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
            currentUser: response,
            isloggedIn: true,
          })
        }
      })
    }
  }

  setUser = response => {
    this.setState({
      currentUser: response.user,
      isloggedIn: true
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/home")
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

  // handleChange = e => {
  //   this.setState({
  //     searchTerm: e.target.value.toUpperCase()
  //   })
  // }
  
  render(){
    console.log("user", this.state.currentUser);

    const { isLoggedIn, currentUser } = this.state;
    const { logout, login, setUser  } = this.props;
    
  return (
      <div className="note-app container">
        <Navigation isLoggedIn={isLoggedIn} currentUser={currentUser} logout={logout} />
        <div id="content" className="ui container">
          <Switch>
            <Route path='/home' render={() => <Home /> } />
          
            <Route path='/login' render={() => <Login setUser={setUser} /> } />
          
            <Route path='/signup' render={() => <Signup login={login}/>} />

            <Route path='/newnote' component={NewNote} />
          
          </Switch>
        </div>
      </div>
  );}
}

export default App;