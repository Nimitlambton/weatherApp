import React, { Component } from "react";

class Weather extends Component {
  state = {};
  constructor(props) {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <h1 key={this.props.key}>
        {this.props.weatherData.city}
        {this.props.weatherData.country} {this.props.weatherData.temp}
      </h1>
    );
  }
}

export default Weather;
