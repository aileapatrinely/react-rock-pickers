import React, { Component } from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  addRocks = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  subRocks = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };
  render() {
    return (
      <div>
        <header>
          <h1>React Rock Pickers</h1>
          <p>
            "You ain't ever worked a day until you worked a day picking rocks."
            - Mike Schlangen
          </p>
        </header>
        <h2>Luke</h2>
        <RockCounter addUp={this.addRocks} sub={this.subRocks} />
        <h2>JJ</h2>
        <RockCounter addUp={this.addRocks} sub={this.subRocks} />
        <h2>Sam</h2>
        <RockCounter addUp={this.addRocks} sub={this.subRocks} />
        <h2>Pete</h2>
        <RockCounter addUp={this.addRocks} sub={this.subRocks} />
        <h2>Total Rocks: {this.state.value}</h2>
      </div>
    );
  }
}

export default App;
