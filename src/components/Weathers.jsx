import React, { Component } from "react";
import "../index.css";

class Weathers extends Component {
  state = {};
  constructor(props) {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div class="p-2 max-w-sm mx-auto bg-black rounded-xl shadow-md flex items-center space-x-4">
          <div class=" text-purple-400">{this.props.weatherData.temp}</div>
          <div>
            <div class="text-xl font-medium text-white">
              {this.props.weatherData.city}
            </div>
            <p class="text-gray-500">{this.props.weatherData.country}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weathers;
