import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className='section' id={this.props.name}>
        <div className='subtitle-small'>{this.props.name}</div>
        <div>{this.props.content}</div>
      </div>
    );
  }
}


export default Section;