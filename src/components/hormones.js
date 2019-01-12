import React, { Component } from 'react';
import HormoneNav from './hormonenav';
import chemical from '../images/chemical.png';


class Hormones extends Component {

  render() {
    
    return (

      <div className='container'>
        <div className='title'>Hormones<img src={chemical} className='title-icon' alt='hormones'></img></div>
        <HormoneNav />
        <a className="btn-floating btn-large purple" href='#top' style={{ bottom: '30px', left: '50px', position: 'fixed' }}><i className="material-icons">arrow_upward</i></a>
      </div>
 
    );

  }
}


export default Hormones;