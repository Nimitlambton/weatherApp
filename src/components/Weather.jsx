import React, { Component } from "react";

class Weather extends Component {
  state = {};
  constructor(props) {
    super();
  }

  componentDidMount() {}

  render() {
    return <h1> HelloWorld {this.props.weatherData.city}</h1>;
  }
}

export default Weather;
