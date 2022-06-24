import React from 'react';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Users from './components/Users/Users';
import Description from './components/Description/Description';
import './App.css';
import Home from './components/Home/Home';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/users' component={Users}></Route>
          <Route exact path='/description' component={Description}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

