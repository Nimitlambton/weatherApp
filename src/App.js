import Weather from "./components/Weather";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //initalizing the data
      location: [
        { city: "new york", country: "us" },
        { city: "Delhi", country: "IN" },
        { city: "Mumbai", country: "IN" },
      ],

      //getLoctionData from api
      locationData: [],
    };
    //heling  functions
    this.addCity = this.addCity.bind(this);
    this.populateSelectedCity = this.populateSelectedCity.bind(this);
  }

  componentDidMount() {
    this.populateSelectedCity();
  }

  render() {
    return (
      <>
        {this.state.locationData.map((locObj, index) => {
          return (
            <ol key={index}>
              <li>
                <Weather weatherData={locObj}></Weather>
              </li>
            </ol>
          );
        })}

        <form>
          <input type="text" placeholder="country" id="country"></input>
          <input type="text" placeholder="city" id="city"></input>
          <button type="button" onClick={this.addCity}>
            submit
          </button>
        </form>
      </>
    );
  }

  //helping functions

  //populate initial city

  populateSelectedCity() {
    this.state.location.map((apiLocation) => {
      this.getWeatherAndSetState(apiLocation.city, apiLocation.country);
    });
  }

  //add city via name
  addCity() {
    const city = document.getElementById("city");
    const country = document.getElementById("country");

    console.log("city is " + city.value);
    console.log("country is " + country.value);

    this.getWeatherAndSetState(city.value, country.value);
  }

  //method to fetchData from api and set state
  getWeatherAndSetState(cityname, country) {
    const weatherData = fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityname},${country}&&units=metric&appid=079b76b390ad70c628a14a9a141e5992`
    );

    weatherData.then((res) => {
      res.json().then((result) => {
        console.log(result);

        let newarray2 = this.state.locationData;
        newarray2.push({
          city: result.name,
          country: result.sys.country,
          temp: result.main.temp,
        });

        this.setState({ locationData: newarray2 });
      });
    });
  }
}

export default App;
