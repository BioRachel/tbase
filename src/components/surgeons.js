import React, { Component } from 'react';

class Surgeons extends Component {
  // initial component setup
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      timeout: null
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  // after the component loads, fetches the information needed from the server and sets the returned json object to this.state.data
  componentDidMount() {
    const that = this;
    fetch('http://127.0.0.1:5000/surgeons') // whatever ip or domain the server is at
      .then((resp) => resp.json())
      .then(function(jresp) {
        that.setState({
          data: jresp['items']
        });
    });
  };

  
  // searches the returned table if its loaded
  handleSearch() {
    var spinner = document.getElementById('spinner');
    spinner.style.visibility = 'visible';

    clearTimeout(this.state.timeout);

    this.state.timeout = setTimeout(function() {
      
      var input = document.getElementById("search").value;
      var table = document.getElementById("surgeon-table");
      var tr = table.getElementsByTagName("tr");
      var i;

      if (input === '' || input === ' ') {
        for (i = 0; i < tr.length; i++) {
          tr[i].style.display = "";
        };
        var spinner = document.getElementById('spinner');
        spinner.style.visibility = 'hidden';
        return 0;
      };

      if (input.length > 2) {
        var filter, tds, td_str;
        filter = input.toUpperCase(); 
         

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          tds = tr[i].getElementsByTagName("td");
          var td = [];
          for (var j = 0; j < tds.length; j++) {
            td.push(tds[j].innerText)
          };
          td_str = td.join(' ');

          if (td_str) {
            if (td_str.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          } 

          var spinner = document.getElementById('spinner');
          spinner.style.visibility = 'hidden';

        };
      }
    }, 500);
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

    // maps the filtered elements to a table row
    var displayElements = elements.map(function(item, key) {  
      return (
        <tr key = {key}>
          <td>{item.country}</td>
          <td>{item.state}</td>
          <td>{item.city}</td>
          <td>{item.surgeon}</td>
          <td>{item.procedures}</td>
          <td>{item.clinic}</td>
        </tr>
      );
    })

    return (
      <div className='container'>
        <br></br>
        <h2>Surgeons</h2>
        <br></br>
        <input type="text" id="search" onKeyUp={e => this.handleSearch()} placeholder="Search"></input>
        <div className='response-body' id='response-body'>
          <table id='surgeon-table'>
            <thead>
              <tr>
                <th onClick={e => this.handleSort(e, 'country')}>Country</th>
                <th onClick={e => this.handleSort(e, 'state')}>State/Province</th>
                <th onClick={e => this.handleSort(e, 'city')}>City</th>
                <th onClick={e => this.handleSort(e, 'surgeon')}>Surgeon</th>
                <th onClick={e => this.handleSort(e, 'procedures')}>Procedures</th>
                <th onClick={e => this.handleSort(e, 'clinic')}>Clinic</th>
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


export default Surgeons;