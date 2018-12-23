import React, { Component } from 'react';
import Button from './button';

class HormoneNav extends Component {
  render() {
    return (
      <div className='border-div'>
        <div className='row'>
          <div className='subtitle col s8'>Feminizing</div>
          <div className='subtitle col s4'>Masculinizing</div>
        </div>

        <div className='row'>
          <div className='geo-mountain col s8'></div>
          <div className='geo-mountain-2 col s4'></div>
        </div>
    
        <div className='button-row'>
          <Button label='Estrogen' class='button' />
          <Button label='Anti-androgen' class='button' />
          <Button label='Progesterone' class='button' />
          <Button label='Hair Growth' class='button' />    <Button label='Testosterone' class='button blue-border' />   
          <Button label='Progestagen' class='button blue-border' />   
        </div>
      </div>
    );
  }
}


export default HormoneNav;