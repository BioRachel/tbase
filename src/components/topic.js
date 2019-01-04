import React, { Component } from 'react';
import List from './list';
import Section from './section';

class Topic extends Component {
  render() {
    
    var list = this.props.list;
    var sections = this.props.sections.map(function(item, key) {  
      return (
        <Section key={key} name={list[key]} content={item} />
      );
    })

    return (
      <div className='space-around' id={this.props.name}>
        <div className='title-underline'>{this.props.name}</div>
        <List list={this.props.list} />
        {sections}
      </div>
    );
  }
}


export default Topic;