import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopNav from './topNav.js';
import Infographics from './infographics';
import Hormones from './hormones';
import Surgeries from './surgeries';
import DietExercise from './dietexercise';
import HRTaccess from './hrtaccess';
import Surgeons from './surgeons';
import Store from './store';
import Contact from './contact';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Route exact path='/infographics' component={Infographics} />
        <Route exact path='/diet-exercise' component={DietExercise} />
        <Route exact path='/hormones' component={Hormones} />
        <Route exact path='/surgeries' component={Surgeries} />
        <Route exact path='/hrt-access' component={HRTaccess} />
        <Route exact path='/surgeons' component={Surgeons} />
        <Route exact path='/store' component={Store} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </div>
    );
  }
}


export default App;
