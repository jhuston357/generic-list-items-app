import React, { Component } from "react";
class SearchBar extends Component {
  state = {};
  handleClick() {
    console.log(this.refs.search.value);
  }
  render() {
    return (
      <form
        action=""
        onSubmit={this.handleClick.bind(this)}
        method="get"
        id="searchform"
      >
        <div className="container-fluid searchbar input-group input-group-lg">
          <input
            type="text"
            ref="search"
            className="form-control"
            aria-label="Search"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search"
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              form="searchform"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
