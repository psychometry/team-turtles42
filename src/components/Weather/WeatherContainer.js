import React, { Component } from 'react';
import Weather from './Weather';
import DarkSkyApi from 'dark-sky-api';
DarkSkyApi.apiKey = '3222a84582786377ec5360ddf8c2e178';
var cityReverseGeocoder = require("city-reverse-geocoder");

class WeatherContainer extends Component {
  constructor() {
    super();
    this.state = {
      icon: null,
      temperature: null,
      location: null,
      oldTime: null,
      lat: null,
      lng: null
    };

  }
  setStateCallback() {
    return null;
  }
 
  componentDidMount(){
    let currentComponent = this;
    const time = new Date().getTime();

    if (time - this.state.oldTime > 15 * 60 * 1000 || this.state.temperature === null) {
      DarkSkyApi.loadCurrent()
        .then(result => {this.setState((state) => ({
          temperature: Math.round(result.temperature) + '°',
          icon: "wi wi-forecast-io-" + result.icon,
          oldTime: time,

        }), this.setStateCallback); console.log(result)}); 
        
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          var userCity = cityReverseGeocoder( position.coords.latitude, position.coords.longitude )[0].city;
          currentComponent.setState({
              location: userCity
            });
        });
      } else {
        console.log('Geolocation is not supported');
    }
    }   
  }  
  
  
  render() {
    return (
      <Weather weatherData ={this.state} />
    );
  }
}

export default WeatherContainer;
