import React from 'react';
import './Weather.scss';
import './styles/weather-icons.css'
import './styles/weather-icons.scss'


var initialState = {
  temperature:  'test',
  location: 'Not Found',
  icon: null,  
  oldTime: null
}

const Weather = ({ weatherData = initialState }) => {
 
	
  return (
    <div className="Weather">
      
      <div style = {{height: '50px'}}>
 
      <table style={{ width:"100%"}}>
        <tbody>
          <tr>
            <td style = {{textAlign: 'right'}}><i className = { weatherData.icon } style = {{fontSize: "2em"}}></i>
            <b style = {{fontSize: "2em", marginLeft: '0.3em'}}> { weatherData.temperature }</b></td>
          </tr>
          <tr>
            <td style = {{textAlign: 'right'}}>{ weatherData.location }</td>
          </tr>
        </tbody>
      </table>

      </div> 
      </div>
      );
   
};

export default Weather;
