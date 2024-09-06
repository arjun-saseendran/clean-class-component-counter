import React, { Component } from "react";
import '../src/App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = ({ count: 0 });
  }
  render() {
    return (
      <div className="box">
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Plus
        </button>

        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Minus
        </button>
      </div>
    );
  }
}
