import React, { Component } from 'react';

class RockCounter extends Component {
  state = {
    value: 0,
  };
  clickIncrease = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  clickDecrease = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };
  clickReset = () => {
    this.setState({
      value: 0,
    });
  };
  render() {
    return (
      <div>
        <div>Rocks Picked: {this.state.value}</div>
        <div>
          <button onClick={this.clickIncrease}>Increase</button>
          <button onClick={this.clickDecrease}>Decrease</button>
          <button onClick={this.clickReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default RockCounter;
