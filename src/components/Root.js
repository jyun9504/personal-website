import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Paper from '../components/Paper';
import BusinessCard from '../components/BusinessCard';
import About from '../containers/About';

class App extends Component {
  render() {
    return (
      <Paper>
        <BusinessCard />
        <Route path="/" exact component={About} />
      </Paper>
    );
  }
}

export default App;