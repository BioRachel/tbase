import React, { Component } from 'react';
import AA from './aa';
import Estrogen from './estrogen';
import HormoneNav from './hormonenav';
import chemical from '../images/chemical.png';

class Hormones extends Component {

  render() {
    
    return (
      <div className='container'>
        <div className='title'>Hormones<img src={chemical} className='title-icon' alt='hormones'></img></div>
        <HormoneNav />
        <Estrogen />
        <AA />
        <a className='back-to-top' href='#top'><i className="material-icons medium" style={{ color: 'white' }}>arrow_upward</i></a>
      </div>
    );

  }
}


export default Hormones;