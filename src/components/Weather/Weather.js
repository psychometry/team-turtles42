import React from 'react';
import './Weather.scss';
import Skycons from 'react-skycons';

const Weather = ({ temperature, location, icon }) => {
  return (
    <div className="Weather">
      <div style = {{height: '50px'}}>
      <table style={{ width:"100%"}}>
        <tbody>
          <tr>
            <td style = {{textAlign: 'right'}}>
              <i className={icon} style={{fontSize: "2em"}}/>
              <Skycons style={{ height: '2em'}} color='white' icon='CLOUDY' autoplay={false}/>
              <b style={{fontSize: "2em", marginLeft: '0.3em'}}>
                {temperature}
              </b>
            </td>
          </tr>
          <tr>
            <td style = {{textAlign: 'right'}}>{location}</td>
          </tr>
        </tbody>
      </table>
      </div> 
    </div>
  );
};

export default Weather;
