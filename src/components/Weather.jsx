import React, { Component } from "react";

class Weather extends Component {
  state = {};
  constructor(props) {
    super();
  }

  componentDidMount() {
    // const WeatherData = fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=new york,us&appid=3b27d21014c24ea211eea9e77246b021`
    // );
    // WeatherData.then((response, error) => {
    //   console.log(response);
    //   response.json().then((result, err) => {
    //     console.log(result);
    //   });
    // });
  }

  render() {
    return <h1> HelloWorld {this.props.weatherData}</h1>;
  }
}

export default Weather;
