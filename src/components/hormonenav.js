import React, { Component } from 'react';
import Button from './button';

class HormoneNav extends Component {
  render() {
    return (
      <div className='border-div'>
        <div className='row'>
          <div className='subtitle col s6'>Feminizing</div>
          <div className='subtitle col s4'>Masculinizing</div>
          <div className='subtitle col s2'>Puberty</div>
        </div>

        <div className='row'>
          <div className='geo-mountain col s6'></div>
          <div className='geo-mountain-2 col s4'></div>
          <div className='geo-mountain col s2'></div>
        </div>
    
        <div className='button-row'>
          <Button label='Estrogen' name='estrogen' area='hormones' class='button' />
          <Button label='Anti-androgen' name='anti-androgen' area='hormones' class='button' />
          <Button label='Other Drugs' name='otherAMAB' area='hormones' class='button' />   
          <Button label='Testosterone' name='testosterone' area='hormones' class='button blue-border' />   
          <Button label='Other Drugs' name='otherAFAB' area='hormones' class='button blue-border' />   
          <Button label='Blockers' name='blockers' area='hormones' class='button blue-border' />   
        </div>
      </div>
    );
  }
}


export default HormoneNav;