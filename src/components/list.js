import React, { Component } from 'react';

class List extends Component {

  render() {
    var list = this.props.list;
    var rows = list.map(function(item) {
      let item_href = '#' + item;
      return <li key={item}><a href={item_href}>{item}</a></li>;
    });
    

    return (
      <div>
        <h4>This section contains:</h4>
        <ul>{rows}</ul>
      </div>
    );
  }
}


export default List;