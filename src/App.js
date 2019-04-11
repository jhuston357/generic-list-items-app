import React, { Component } from "react";
import Content from "./components/content";
import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
