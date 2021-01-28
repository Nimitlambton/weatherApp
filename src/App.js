import Weather from "./components/Weather";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    let locationDataArr = [];

    super(props);
    this.state = {
      location: [
        { city: "new york", country: "us" },
        { city: "Delhi", country: "IN" },
        { city: "Mumbai", country: "IN" },
        // { city: "Mumbai", country: "IN" },
      ],

      locationData: [{ city: "", country: "" }],
    };
  }

  componentWillMount() {
    this.state.location.map((loca) => {
      const weatherData = fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${loca.city},${loca.country}&appid=079b76b390ad70c628a14a9a141e5992`
      );
      weatherData.then((res) => {
        res.json().then((result) => {
          let newarray = this.state.locationData;
          newarray.push({
            city: result.name,
            country: result.sys.country,
            temp: result.main.temp,
          });

          this.setState({ locationData: newarray });

          // console.log(this.state.locationData);
        });
      });
    });
  }

  render() {
    return (
      <>
        <h1> This is current weather</h1>

        {this.state.locationData.map((locobj) => {
          return <Weather weatherData={locobj.city}> </Weather>;
        })}
      </>
    );
  }
}

export default App;
