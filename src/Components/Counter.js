import React from "react";

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: 1,
      maxValue: null
    };
  }

  setMaxValue = (event) => {
    this.setState({ maxValue: event.target.value, counterValue: 0 });
  };

  handleClick = (operation) => {
    const { maxValue, counterValue } = this.state;
    if (!counterValue) {
      this.setState({ counterValue: 0 });
    }

    if (operation === "increment") {
      if (
        (maxValue && counterValue < maxValue) ||
        (!maxValue && counterValue < 1000)
      ) {
        this.setState((prevState) => {
          return { counterValue: parseInt(prevState.counterValue) + 1 };
        });
      }
    } else {
      if (counterValue > 1) {
        this.setState((prevState) => {
          return { counterValue: parseInt(prevState.counterValue) - 1 };
        });
      }
    }
  };

  handleValue = (event) => {
    this.setState({ counterValue: event.target.value });
  };

  render() {
    const { maxValue, counterValue } = this.state;

    return (
      <div>
        <span>Enter Counter Max Value &nbsp;</span>
        <input
          type="number"
          placeholder="Enter max value"
          value={maxValue}
          onChange={this.setMaxValue.bind(this)}
        />

        <div className="main-container">
          <div
            className="decrement-div counter"
            onClick={() => this.handleClick("decrement")}
          >
            -
          </div>
          <div className="value-div counter">
            <input
              type="number"
              className="value-input"
              onChange={this.handleValue.bind(this)}
              value={counterValue}
            />
          </div>
          <div
            className="increment-div counter"
            onClick={() => this.handleClick("increment")}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
