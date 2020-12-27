import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import NewNote from './components/NewNote';
import { Container } from 'react-bootstrap';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
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
      <Container fluid>
      <Router>
        <div id='content-wrap'>
          <Route render={(props) => <NavigationBar {...props} currentUser={this.state.currentUser} updateUser={this.updateUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />}/>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} />}/>
            <Route path='/home' render={(props) => <Home {...props} updateUser={this.updateUser} currentUser={this.state.currentUser} />}/>
            <Route path='/signup' render={(props) => <SignUp {...props} updateUser={this.updateUser} currentUser={this.state.currentUser} />}/>
            <Route path='/newnote' component={NewNote} /> 
          </Switch>
        </div>
      </Router>
      <Footer id='footer'/>
      </Container>
    )
  }
}
