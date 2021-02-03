import React, { Component } from "react";
import "../index.css";
class InputWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1>
        <form>
          <div className="m-2">
            <input
              type="text"
              className="m-2   rounded-lg p-2 border-2"
              placeholder="country"
              id="country"></input>
            <input
              type="text"
              placeholder="city"
              id="city"
              className="m-2   p-2 border-2   rounded-lg "></input>
            <button
              className="m-2 border-lg bg-red-500 p-2 border-2 border-purple-600  rounded-lg"
              type="button"
              onClick={this.props.onAddCity}>
              submit
            </button>
          </div>
        </form>
      </h1>
    );
  }
}

export default InputWeather;
