import React, { Component } from "react";
// import weather from 'yahoo-weather';
import cityReverseGeocoder from "city-reverse-geocoder";
import { loadWeatherSettings } from "../../utilities";
import { saveToStorage } from "../../localStorage";
import Weather from "./Weather";
import toggleOnOff from "../../HOC";

class WeatherContainer extends Component {
  constructor() {
    super();
    this.state = loadWeatherSettings();
  }

  componentDidUpdate() {
    saveToStorage("react-dash-weather-settings", this.state);
  }

  componentDidMount() {
    const { unit } = this.state;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { city: location } = cityReverseGeocoder(
          position.coords.latitude,
          position.coords.longitude
        )[0];

        // TODO: set temp unit 'c' (default) or 'f' in settings
        // weather(location, unit)
        //   .then((info) => {
        //     // console.log(info);
        //     const { code, temp } = info.item.condition;
        //     const { temperature: unit } = info.units;

        //     this.setState({
        //       location,
        //       code,
        //       temp,
        //       unit,
        //     });
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      });
    } else {
      console.log("Geolocation is not supported");
    }
  }

  render() {
    return <Weather {...this.state} />;
  }
}

export default toggleOnOff(WeatherContainer);
