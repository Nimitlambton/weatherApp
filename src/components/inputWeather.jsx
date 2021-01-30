import React, { Component } from "react";

class InputWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1>
        <form>
          <input type="text" placeholder="country" id="country"></input>
          <input type="text" placeholder="city" id="city"></input>
          <button type="button" onClick={this.props.onAddCity}>
            submit
          </button>
        </form>
      </h1>
    );
  }
}

export default InputWeather;
