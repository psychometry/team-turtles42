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
    const unit = "imperial";
    const { VITE_WEATHER_KEY } = import.meta.env;
    const openweatherURL = "https://api.openweathermap.org/data/2.5/weather";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = cityReverseGeocoder(
          position.coords.latitude,
          position.coords.longitude
        )[0];

        fetch(
          openweatherURL +
            `?lat=${location.latitude}&lon=${location.longitude}&units=${unit}&appid=${VITE_WEATHER_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            const { temp } = data.main;
            const location = data.name;
            const code =
              data.weather[0].id == 800
                ? data.weather[0].id
                : Math.floor(data.weather[0].id / 100);
            const unit = "F";
            this.setState({
              location,
              code,
              temp: Math.round(temp),
              unit,
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        // TODO: set temp unit 'c' (default) or 'f' in settings
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
