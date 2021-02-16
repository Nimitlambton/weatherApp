import React, { Component } from "react";
import "../index.css";

class Weathers extends Component {
  state = {
    emoji: "",
  };
  constructor(props) {
    super();

    this.returnEmoji = this.returnEmoji.bind(this);
  }

  componentDidMount() {
    this.returnEmoji(this.props.weatherData.temp);
  }

  //helping function to return emoji
  returnEmoji(temp) {
    if (temp < 0) {
      this.setState({ emoji: "🥶" });
    } else if (temp > 0) {
      this.setState({ emoji: "🌞" });
    }
  }

  returnImgSrc() {
    var str = "http://openweathermap.org/img/wn/";
    var str2 = this.props.weatherData.icon;
    var str3 = "@2x.png";
    var res = str.concat(str2, str3);
    console.log(res);
    return res;
  }

  render() {
    return (
      // weather blox
      <div className="bg-black h-48 w-48 p-2 m-4  text-white  hover:border-red-600 hover:bg-gray-500  border-4  hover:text-red-500 rounded-lg justify-between  shadow-2xl  ">
        <div className="flex justify-center  h-12 text-6xl">
          <img src={this.returnImgSrc()} alt="weather img "></img>
          <h6 className="text-lg"> {this.props.weatherData.desc} </h6>
        </div>
        <div className="mt-8  h-12  flex justify-center items-center ">
          {this.props.weatherData.temp} °C
        </div>
        <div className="flex justify-center items-center "></div>

        <div className="flex justify-center ">
          <div className=" ml-2 mr-2"> {this.props.weatherData.city} </div>
          <div> {this.props.weatherData.country} </div>
        </div>
      </div>
    );
  }
}

export default Weathers;
