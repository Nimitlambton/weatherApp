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

  returnEmoji(temp) {
    if (temp < 0) {
      this.setState({ emoji: "🥶" });
    } else if (temp > 0) {
      this.setState({ emoji: "🌞" });
    }
  }

  render() {
    return (
      <div className="bg-black h-48 w-48 p-2 m-4  text-white  hover:border-red-600 hover:bg-gray-500  border-4  hover:text-red-500 rounded-lg justify-between ">
        <div className="flex justify-center  h-8  text-6xl">
          {this.state.emoji}
        </div>
        <div className="mt-8  h-12  flex justify-center items-center ">
          {this.props.weatherData.temp} c
        </div>
        <div className="flex justify-center ">
          <div className=" ml-2 mr-2"> {this.props.weatherData.city} </div>
          <div> {this.props.weatherData.country} </div>
        </div>
      </div>
    );
  }
}

export default Weathers;
