import React from 'react';
import classes from './App.module.css';

function App({history}) {
  return (
    <div className={classes.App}>
      <h1>About this Sample</h1>
      <section>
        This sample uses micro front ends with React and Angular to exemplify how to integrate them
      </section>
    </div>
  );
}

export default App;
