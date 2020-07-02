import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Paper from './Paper';
import BusinessCard from './BusinessCard';
import About from '../containers/About';

class App extends Component {
  render() {
    return (
      <div>
        <Paper>
          <BusinessCard />
        </Paper>
        <Paper>
          <Route path="/personal-website/" exact component={About} />
        </Paper>
      </div>
    );
  }
}

export default App;