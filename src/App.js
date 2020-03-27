import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotesContainer from './components/NotesContainer';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import NoteList from './components/NoteList'

function App() {
  return (
    <BrowserRouter>
      <div className="note-app container">
      <Navbar />
        <h1 className="center red-text">Notes</h1>
        <NotesContainer/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/notelist' component={NoteList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
