import Weather from "./components/Weathers";
import React, { Component } from "react";
import InputWeather from "./components/inputWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import HeroImg from "./Assets/heroimg.jpg";
class App extends Component {
  constructor(props) {
    super(props);

    //  document.body.classList.add("bg-red-100");

    document.body.className = "bg-green-200";
    this.state = {
      //initalizing the data
      location: [
        { city: "new york", country: "us" },
        { city: "Delhi", country: "IN" },
        { city: "Mumbai", country: "IN" },
      ],

      //getLoctionData from api
      locationData: [],

      show: "true",
    };
    //helping  functions
    this.addCity = this.addCity.bind(this);
    this.populateSelectedCity = this.populateSelectedCity.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const element = document.getElementById("pko");

    console.log(element);

    element.style.visibility = "";
  }

  componentDidMount() {
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

        <div className="h-screen w-screen   shadow-2xl  ">
          <div className=" flex flex-wrap  mb-auto   shadow-2xl  ">
            {this.state.locationData.map((locObj, index) => {
              console.log(index);
              return (
                <div key={index}>
                  <Weather weatherData={locObj}></Weather>
                </div>
              );
            })}

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

          <div className="flex  bg-gray-900 justify-center h-16 w-screen  items-center text-yellow-600 text-xl flex-wrap ">
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
    if (cityname === "" || country === "") {
      return;
    }

    const weatherData = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname},${country}&&units=metric&appid=079b76b390ad70c628a14a9a141e5992`
    );

    weatherData
      .then((res) => {
        res.json().then((result) => {
          //   console.log(result);

          let newarray2 = this.state.locationData;
          newarray2.push({
            city: result.name,
            country: result.sys.country,
            temp: result.main.temp,
          });

          this.setState({ locationData: newarray2 });
          const element = document.getElementById("pko");
          element.style.visibility = "hidden";
        });
      })
      .finally("you fucking enter ");
  }
}

export default App;
