import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className='section top100' id={this.props.name}>
        <div>{this.props.content}</div>
      </div>
    );
  }
}


export default Section;