import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NewNote from './components/NewNote';
import MainContainer from './components/MainContainer';


class App extends Component {
    state = {
      currentUser: null
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

  setUser = (response) => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/")
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
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
    console.log("user", this.state.currentUser);
    console.log(this.props);
    
  return (
      <div className="note-app container">
      <Navbar currentUser={this.state.currentUser} logout={this.logout} handleChange={this.handleChange} />
        <h1 className="center red-text">Notes</h1>
        <MainContainer />
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