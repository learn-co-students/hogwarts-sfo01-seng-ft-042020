import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filter from './Filter'
import HogContainer from './HogContainer'
import hogs from "../porkers_data";

class App extends Component {
  state = {
    displayGreased: false,
    sortBy: "name",
    hiddenHogs: []
  }

  handleSortHogs = (event) => {
    this.setState({sortBy: event.target.value})
  }

  handleToggleGreased = () => {
    this.setState({ displayGreased: !this.state.displayGreased });
  };

  handleHiddenHogs = (hog) => {
    this.setState({
      hiddenHogs: [...this.state.hiddenHogs, hog],
    });
  }

  filterGreasedHogs = () => {
    let filteredHogs = hogs
    if (this.state.displayGreased) {
      filteredHogs = hogs.filter((hog) => hog.greased)
    }
    return filteredHogs
  }

  sortHogsByNameOrWeight = () => {
    let filteredHogs = this.filterGreasedHogs()
    let sortedHogs = [];
    if (this.state.sortBy === "name") {
      sortedHogs = filteredHogs.sort((a,b) => a.name.localeCompare(b.name))
    } else if (this.state.sortBy === "weight") {
      sortedHogs = filteredHogs.sort((a,b) => a.weight - b.weight)
    }
    return sortedHogs;
  }

  // filterHiddenHog = () => {
  //   return this.sortHogsByNameOrWeight().filter((hog) => {
  //     return this.state.hiddenHogs.indexOf(hog) === -1;
  //   });
  // }



  render() {
    return (
      <div className="App">
        <Nav />
        <Filter displayGreased={this.state.displayGreased} handleToggleGreased={this.handleToggleGreased} handleSortHogs={this.handleSortHogs} />
        <HogContainer hogs={this.sortHogsByNameOrWeight()} />
      </div>
    );
  }
}

export default App;
