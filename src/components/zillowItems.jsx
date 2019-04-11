import React, { Component } from "react";
import ZillowItem from "./zillowItem";

class ZillowItems extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="list-group">
          <ZillowItem />
          <ZillowItem />
          <ZillowItem />
          <ZillowItem />
        </div>
      </div>
    );
  }
}

export default ZillowItems;
