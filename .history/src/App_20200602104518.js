import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}
