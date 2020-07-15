import React, { Component } from 'react';

class RockCounter extends Component {
  state = {
    value: 0,
  };
  clickIncrease = () => {
    if (this.state.value >= 49) {
      this.setState({
        value: this.state.value + 1,
        done: 'Done',
      });
    } else {
      this.setState({
        value: this.state.value + 1,
      });
    }
    this.props.addUp();
  };
  clickDecrease = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    } else {
      this.setState({
        value: 0,
      });
    }
    this.props.sub();
  };
  clickReset = () => {
    this.setState({
      value: 0,
    });
  };
  render() {
    return (
      <div>
        <div>
          Rocks Picked: {this.state.value} {this.state.done}
        </div>
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
