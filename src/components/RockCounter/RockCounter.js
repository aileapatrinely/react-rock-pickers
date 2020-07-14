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
  render() {
    return (
      <div>
        <div>Rocks Picked: {this.state.value}</div>
        <div>
          <button onClick={this.clickIncrease}>Increase</button>
          <button>Decrease</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
}

export default RockCounter;