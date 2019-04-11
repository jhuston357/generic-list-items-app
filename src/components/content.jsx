import React, { Component } from "react";
import SearchBar from "./searchBar";
import ZillowItems from "./zillowItems";

class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <ZillowItems />
      </React.Fragment>
    );
  }
}

export default Content;
