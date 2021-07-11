import Weather from "./components/Weathers";
import React, { Component } from "react";
import InputWeather from "./components/inputWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import HeroImg from "./Assets/heroimg.jpg";
class App extends Component {
  //hellowold
  constructor(props) {
    super(props);
    document.body.className = "bg-green-200";
    this.state = {
      //initalizing the data
      location: [
        { city: "new york", country: "us" },
        { city: "Delhi", country: "IN" },
        { city: "Mumbai", country: "IN" },
      ],

      // initialize  array to store Location Data from api
      locationData: [],

      //boolean var create toggle effect for weatherInput

      show: "true",
    };

    //helping  functions
    this.addCity = this.addCity.bind(this);
    this.populateSelectedCity = this.populateSelectedCity.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    //to populate the intial data from fetch
    this.populateSelectedCity();
  }

  render() {
    return (
      <>
        <div className="bg-blue-600 w-screen fixed  text-4xl flex justify-center text-blue-300 ">
          <h1> The Weather App</h1>
        </div>

        <div className=" flex h-80 mt-10   ">
          <img src={HeroImg} alt="heroImg" className="w-screen  rounded-lg" />
        </div>

        <div className="h-screen w-screen   shadow-2xl relative  ">
          <div className=" flex flex-wrap  mb-auto   shadow-2xl  ">
            {this.state.locationData.map((locObj, index) => {
              console.log(index);
              return (
                <div key={index}>
                  <Weather weatherData={locObj}></Weather>
                </div>
              );
            })}

            {/* add icon  */}
            <div className=" w-20 flex justify-center items-center  ">
              <FontAwesomeIcon
                icon="plus-circle"
                size="lg"
                color="purple"
                onClick={this.toggle}
              />
            </div>

            <div id="pko" style={{ visibility: "hidden" }}>
              <InputWeather onAddCity={this.addCity}> </InputWeather>
            </div>
          </div>

          {/* Footer */}

          <div className="  absolute bottom-0  flex  bg-gray-900 justify-center h-16 w-screen  items-center text-yellow-600 text-xl flex-wrap ">
            Made by Nimit pamnani with ❤️ in Toronto CA
          </div>
        </div>
      </>
    );
  }

  //helping functions

  //populate initial city

  populateSelectedCity() {
    this.state.location.map((apiLocation) => {
      this.getWeatherAndSetState(apiLocation.city, apiLocation.country);
      return 1;
    });
  }

  //add city via name
  addCity() {
    const city = document.getElementById("city");
    const country = document.getElementById("country");

    //    console.log("city is " + city.value);
    //  console.log("country is " + country.value);

    this.getWeatherAndSetState(city.value, country.value);
  }

  //method to fetchData from api and set state
  getWeatherAndSetState(cityname, country) {
    //null checker

    if (cityname === "" || country === "") {
      return;
    }

    // fetching api
    const weatherData = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname},${country}&&units=metric&appid=079b76b390ad70c628a14a9a141e5992`
    );

    // after fetching api
    weatherData
      .then((res) => {
        res.json().then((result, index) => {
          let locationData = this.state.locationData;

          console.log(result.weather[0]);
          locationData.push({
            city: result.name,
            country: result.sys.country,
            temp: result.main.temp,
            icon: result.weather[0].icon,
            desc: result.weather[0].description,
          });

          //setting  up location data received from  api
          this.setState({ locationData });
          const element = document.getElementById("pko");
          element.style.visibility = "hidden";
        });
      })
      .finally("you fucking enter ");
  }

  //helping function to create toggle effect
  toggle() {
    const element = document.getElementById("pko");
    element.style.visibility = "";
  }
}

export default App;
