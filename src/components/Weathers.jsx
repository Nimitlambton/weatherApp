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
        <div className="p-2   bg-black rounded-xl  flex items-center space-x-4 justify-center  ">
          <div class=" text-purple-400 content-evenly ">
            {this.props.weatherData.temp}
          </div>
          <div>
            <div class="text-xl font-medium text-white  content-center ">
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
