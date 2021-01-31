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
          <input
            type="text"
            placeholder="city"
            id="city"
            className="rounded-full border hover:bg-red-600
            bg-green-900 "></input>
          <button
            type="button"
            onClick={this.props.onAddCity}
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            submit
          </button>
        </form>
      </h1>
    );
  }
}

export default InputWeather;
