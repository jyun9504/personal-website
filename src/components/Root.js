import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, Transition } from "react-transition-group";
import { gsap, TimelineMax as Timeline, Power1 } from 'gsap';
import Paper from './Paper';
import BusinessCard from './BusinessCard';
import About from '../containers/About';
import Works from '../containers/Works';
import Divider from './Divider';
import Navbar from './Navbar';

gsap.registerPlugin(Timeline, Power1);

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, y: 25, delay, ease: Power1.easeInOut });

  return timeline;
}

export const play = (node, appears) => {
  const delay = appears ? 0 : 0.4;
  let timeline = getDefaultTimeline(node, delay);

  timeline.play();
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, y: 10, ease: Power1.easeOut });
  timeline.play();
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Paper>
            <BusinessCard />
            <Divider />
            <Navbar />
          </Paper>
          <Route render={({ location }) => {
            const { key } = location

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                  <Switch location={location}>
                    <Route path="/personal-website/" exact component={ About } />
                    <Route path="/personal-website/works" component={ Works } />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;