import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import NewNote from './components/NewNote';
import Dashboard from './components/Dashboard';
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

handleLogin = (user) => {
  this.setState({
    currentUser: user
  })
}

  render() {
    const {currentUser} = this.state;
    return (
      <Container fluid>
      <Router>
        <div id='content-wrap'>
          <Route render={(props) => <NavigationBar {...props} currentUser={currentUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />}/>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} currentUser={currentUser} />}/>
            <Route path='/home' render={(props) => <Home {...props}  currentUser={currentUser} />}/>
            <Route path='/signup' render={(props) => <SignUp {...props} currentUser={currentUser} />}/>
            <Route path='/newnote' render={(props) => <NewNote {...props} currentUser={currentUser} />}/>
            <Route path='/dashboard' render={(props) => <Dashboard {...props} currentUser={currentUser} handleLogin={this.handleLogin} />}/>
          </Switch>
        </div>
      </Router>
      <Footer id='footer'/>
      </Container>
    )
  }
}
