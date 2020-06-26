import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filters from './Filters'

import HogContainer from "./HogContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showGreased: false,
      sortBy: "name",
      hogs: hogs,
    }
  }
  handleToggleGreased = () => {
    
    
    this.setState({ 
      showGreased: !this.state.showGreased,
    });
  };

  filterGreased = () => {
    let filtered = hogs;

    if (this.state.showGreased) {
      // filter the hogs that are greased
      filtered = hogs.filter((hog) => hog.greased);
    }

    return filtered;
  };


  
  handleSort = event => {
    function compare(a, b, key) {
      // Use toUpperCase() to ignore character casing
      let varA = typeof a[key] == "string" ? a[key].toUpperCase() : a[key];
      let varB = typeof b[key] == "string" ? b[key].toUpperCase() : b[key];
    
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return comparison;
    }
    let filteredHogs = this.filterGreased();
    let sortedHogs = filteredHogs.sort((a, b) => compare(a, b, event.target.value))
    this.setState({
      hogs: sortedHogs
    })
    
  }

  render() {

    
    return (
      <div className="App">
        <Nav />
        <Filters 
         showGreased={this.state.showGreased}
         handleToggleGreased={this.handleToggleGreased}
         handleSortHogs={this.handleSort}
        />
        <HogContainer hogData={this.filterGreased()}/>
      </div>
    );
  }
}

export default App;



