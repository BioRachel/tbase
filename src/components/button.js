import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    var ref = '/' + this.props.area + '/' + this.props.name;

    return (
      <Link to={ref} className={this.props.class}>
        {this.props.label}
      </Link>
    );
  }
}


export default Button;