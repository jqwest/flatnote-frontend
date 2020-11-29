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
      username: '',
      userId: '',
      notes: [],
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={(props) => <NavigationBar {...props} username={this.state.username} />}/>
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} />}/>
            <Route path='/home' render={(props) => <Home {...props} />}/>
          </Switch>
        </div>
      </Router>
      
    )
  }
}
