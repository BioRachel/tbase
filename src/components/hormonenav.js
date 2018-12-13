import React, { Component } from 'react';
import Button from './button';

class HormoneNav extends Component {
  render() {
    return (
      <div className='border-div'>
        <div className='subtitle' style={{ marginTop: '25px'}}>Feminizing</div>
        <div className='button-row'>
          <Button label='Estrogen' className='button' />
          <Button label='Anti-androgen' className='button' />
          <Button label='Progesterone' className='button' />
          <Button label='Hair Growth' className='button' />
        </div>
        <div className='subtitle'>Masculinizing</div>
        <div className='button-row'>
          <Button label='Testosterone' className='button' />
          <Button label='Other' className='button' />
          <div className='blank-tile-2'></div>
        </div>
      </div>
    );
  }
}


export default HormoneNav;