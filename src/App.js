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

const USERS = "http://localhost:3000/users";
const NOTES = "http://localhost:3000/notes";

export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        currentUser: null,
        notes: [],
        noteTitle: '',
        noteSection: '',
        addNote: false,
        updateNote: false,
    }
  }

 

  componentDidMount() {
    fetch(NOTES)
    .then(resp => resp.json())
    .then(notes => {
      console.log(notes)
      this.setState({
        ...this.state,
        notes: notes
      })
    })
    .catch(err => console.log(err))
  }

  fetchPosts = () => {
    fetch(NOTES)
    .then(resp => resp.json())
    .then(notes => {
      this.setState({
        ...this.state,
        notes: notes
      })
    })
    .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogout = () => {

    localStorage.removeItem('token')
    this.setState({
      currentUser: null,
      notes: []
    })
    window.location.href = 'http://localhost:3001/home'
  }

  updateUser = (data) => {
    this.setState({
      ...this.state,
      currentUser: data['user'],
      notes: data['notes'],
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
            <Route path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} updateUser={this.updateUser} />}/>
            <Route path='/home' render={(props) => <Home {...props}  currentUser={currentUser} />}/>
            <Route path='/signup' render={(props) => <SignUp {...props} currentUser={currentUser} />}/>
            <Route path='/newnote' render={(props) => <NewNote {...props} currentUser={currentUser} />}/>
            <Route path='/dashboard' render={(props) => <Dashboard {...props} currentUser={currentUser} updateUser={this.updateUser} handleLogin={this.handleLogin} />}/>
          </Switch>
        </div>
      </Router>
      <Footer id='footer'/>
      </Container>
    )
  }
}
