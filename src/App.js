import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NewNote from './components/NewNote';

// const API = 'http://localhost:3000/'

class App extends Component {
    state = {
      currentUser: null
    }


  setUser = user => {    
    this.setState({
      currentUser: user
    }, () => {
    this.props.history.push('/')})
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value.toUpperCase()
    })
  }

  render(){
    console.log("user", this.state.currentUser);
    console.log(this.props);
    
  return (
      <div className="note-app container">
      <Navbar handleChange={this.handleChange} />
        <h1 className="center red-text">Notes</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          
          <Route path='/login' render={() => <Login setUser={this.setUser} /> } />
          
          <Route path='/signup' render={() => <Signup setUser={this.setUser}/>} />

          <Route path='/newnote' component={NewNote} />
          
          </Switch>
      </div>
  );}
}

export default App;