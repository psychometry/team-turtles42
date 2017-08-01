import React from 'react';
import './Header.scss';
import '../styles/weather-icons.css'
import '../styles/weather-icons.scss'
import DarkSkyApi from 'dark-sky-api';
DarkSkyApi.apiKey = '3222a84582786377ec5360ddf8c2e178';

// WeatherForecast uses DarkSkyAPI and https://erikflowers.github.io/weather-icons/ for icons
// API requires the components/font folder and the components/styles folder contents
// TODO: 
// 1) Add more details (location, high/low and apparent temperature. Maybe UV index if there's space)
// 		-> potentially look later into making weather panel customizable (show specific data, etc)
// 2) Organize the data in the box properly
// 3) Add in small advertisement for DarkSky to comply with TOS
// 4) Make API call every 30 minutes. Save result in localstorage to 
//    prevent api from being called everytime a new tab is opened.
// 5) Add default values for temperature box so that it doesn't "flash" out of nowhere
// 6) Probably should put api key into env variables sometime
class WeatherForecast extends React.Component {
    constructor() {
      super();
      this.state = {
        location: 'N/A',
        temp: 0,
        retrieved: 0,
        icon: null
      }
    }
	// This function does nothing. I only have it since have a callback apparently ensures 
	// that setState finishes before going to next line. There may be a better way.
    setStateCallback() {
      return null;
    }

    render() {
	// This if statement may not be needed now. I will test later.
      if (this.state.retrieved === 0) {
		// API called -> data saved to state   
        DarkSkyApi.loadCurrent()
          .then(result => this.setState((state) => ({
            temp: result.temperature,
            icon: "wi wi-forecast-io-" + result.icon
          }), this.setStateCallback));
        this.setState((state) => ({
          retrieved: 1
        }));
      }

      return ( < div >
        < div > < i className = {this.state.icon} style = {{fontSize: "3em"}} > < /i></div >
        < div > { this.state.temp } < /div> < /div>);

      }
    }



    const Header = () => {
      return ( < div className = "Header" >
        <div className = "Links"> Links < /div> 
		<div className = "Weather"> < WeatherForecast /> </div> 
		</div>
      );
    };


    export default Header;
