import React, { Component } from 'react';


class Button extends Component {
  render() {
    var ref = '#' + this.props.label;

    return (
      <a href={ref} className='button'>
        {this.props.label}
      </a>
    );
  }
}


export default Button;