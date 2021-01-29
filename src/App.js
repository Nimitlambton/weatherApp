import Weather from "./components/Weather";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [
        { city: "new york", country: "us" },
        { city: "Delhi", country: "IN" },
        { city: "Mumbai", country: "IN" },
        // { city: "Mumbai", country: "IN" },
      ],

      locationData: [],
    };

    this.addWeather = this.addWeather.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
  }

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll() {
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
        });
      });
      return 1;
    });
  }

  addWeather() {
    const city = document.getElementById("city");
    const country = document.getElementById("country");

    console.log("city is " + city.value);
    console.log("country is " + country.value);

    let newarray = this.state.location;

    newarray.push({ city: city.value, country: country.value });

    //console.log(newarray);
    //this.setState({ location: newarray });
    //console.log(this.state.location);
    // this.fetchAll();

    let newarray2 = this.state.locationData;

    newarray2.push({
      city: "dummy",
      country: "this way dummy",
      temp: "dummy",
    });

    this.setState({ locationData: newarray2 });
  }

  render() {
    return (
      <>
        {
          this.state.locationData.map((locobj, index) => {
            return (
              <ol key={index}>
                <li>
                  <Weather weatherData={locobj}></Weather>{" "}
                </li>
              </ol>
            );
          })
          // console.log(this.removeDupli())
        }

        <form>
          <input type="text" placeholder="country" id="country"></input>
          <input type="text" placeholder="city" id="city"></input>
          <button type="button" onClick={this.addWeather}>
            submit
          </button>
        </form>
      </>
    );
  }
}

export default App;
