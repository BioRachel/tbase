import React, { Component } from 'react';


class Button extends Component {
  render() {
    var ref = '#' + this.props.label;

    return (
      <a href={ref} className={this.props.class}>
        {this.props.label}
      </a>
    );
  }
}


export default Button;