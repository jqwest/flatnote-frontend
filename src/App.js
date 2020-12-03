import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import Home from './components/Home';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

handleLogin = userLogin => {
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(userLogin)
  }

  fetch('http://localhost:3000/login', reqObj)
  .then(resp => resp.json())
  .then( user => 
    this.setState({
      ...this.state,
      currentUser: user
    }))
    .catch(err => console.log(err))
}

handleLogout = () => {
  localStorage.removeItem('token')
  this.setState({
    currentUser: null
  })
}

updateUser = data => {
  this.setState({
    ...this.state,
    currentUser: data['user']
  })
}

  render() {
    return (
      <Router>
        <div>
          <Route render={(props) => <NavigationBar {...props} currentUser={this.state.currentUser} updateUser={this.updateUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />}/>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} />}/>
            <Route path='/home' render={(props) => <Home {...props} updateUser={this.updateUser} currentUser={this.state.currentUser} />}/>
          </Switch>
        </div>
      </Router>
      
    )
  }
}
