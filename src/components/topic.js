import React, { Component } from 'react';
import List from './list';
import Section from './section';

class Topic extends Component {
  render() {

    return (
      <div className='space-around' id={this.props.name}>
        <div className='title-underline'>{this.props.name}</div>
        <List list={this.props.list} />
        <Section name={this.props.list[0]} content={this.props.sections[0]} />
        <Section name={this.props.list[1]} content={this.props.sections[1]} />
        <Section name={this.props.list[2]} content={this.props.sections[2]} />
        <Section name={this.props.list[3]} content={this.props.sections[3]} />
        <Section name={this.props.list[4]} content={this.props.sections[4]} />
      </div>
    );
  }
}


export default Topic;