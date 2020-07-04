import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Paper from './Paper';
import BusinessCard from './BusinessCard';
import About from '../containers/About';
import Works from '../containers/Works';
import Divider from './Divider';
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Paper>
          <BusinessCard />
          <Divider />
          <Navbar />
        </Paper>
        <Paper>
          <Route path="/personal-website/" exact component={ About } />
          <Route path="/personal-website/works" component={ Works } />
        </Paper>
      </div>
    );
  }
}

export default App;