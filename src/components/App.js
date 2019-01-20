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
import estrogen from './estrogen';
import OtherDrugs from './other_drugs';
import OtherDrugsFTM from './FTM_other_drugs';
import AA from './aa';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Route exact path='/infographics' component={Infographics} />
        <Route exact path='/diet-exercise' component={DietExercise} />
        <Route path='/hormones' component={Hormones} />
        <Route exact path='/hormones/estrogen' component={estrogen} />
        <Route exact path='/hormones/anti-androgen' component={AA} />
        <Route exact path='/hormones/otherAMAB' component={OtherDrugs} />
        <Route exact path='/hormones/otherAFAB' component={OtherDrugsFTM} />
        <Route exact path='/surgeries' component={Surgeries} />
        <Route exact path='/hrt-access' component={HRTaccess} />
        <Route exact path='/surgeons' component={Surgeons} />
        <Route exact path='/store' component={Store} />
        <Route exact path='/contact' component={Contact} />
      </div>
    );
  }
}


export default App;
