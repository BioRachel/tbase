import React, { Component } from 'react';



class HRTaccess extends Component {
  // initial component setup
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  // after the component loads, fetches the information needed from the server and sets the returned json object to this.state.data
  componentDidMount() {
    const that = this;
    fetch('http://127.0.0.1:5000/hrt-access') // whatever ip or domain the server is at
      .then((resp) => resp.json())
      .then(function(jresp) {
        that.setState({
          data: jresp['items']
        });
    });
  };

  // searches the returned table if its loaded
  handleSearch(e, value) {
    console.log(e, value)
  };

  // sorts the table based on column clicked
  handleSort(event, sortKey) {
    const data = this.state.data;
    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({data})
  };

  // renders the component
  render() {
    // all elements
    const elements = this.state.data;
    var filterStr = this.state.filter;

    // elements remaining after filter
    var filteredElements = elements;

    // maps the filtered elements to a table row
    var displayElements = filteredElements.map(function(item, key) {  
      return (
        <tr key = {key}>
          <td>{item.country}</td>
          <td>{item.state}</td>
          <td>{item.city}</td>
          <td>{item.process}</td>
          <td>{item.clinic}</td>
          <td>{item.doctors}</td>
        </tr>
      );
    })

    return (
      <div className='container'>
        <br></br>
        <h2>HRT access per region</h2>
        <br></br>
        <input type="text" id="search" onKeyUp={e =>this.handleSearch(e, this)} placeholder="Search"></input>
        <div className='response-body'>
          <table>
            <thead>
              <tr>
                <th onClick={e => this.handleSort(e, 'country')}>Country</th>
                <th onClick={e => this.handleSort(e, 'state')}>State/Province</th>
                <th onClick={e => this.handleSort(e, 'city')}>City</th>
                <th onClick={e => this.handleSort(e, 'process')}>Process</th>
                <th onClick={e => this.handleSort(e, 'clinic')}>Clinic</th>
                <th onClick={e => this.handleSort(e, 'doctors')}>Known Doctors</th>
              </tr>
            </thead>
            <tbody>
              {displayElements}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default HRTaccess;