import React from 'react';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import './App.css';


function App({history}) {
  return (
    <div>
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>
          <Route path='/about' component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
