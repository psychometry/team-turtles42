import React from 'react';
import styled from 'styled-components';
import './meteocons/meteocons.scss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  position: fixed;
  top: 20px;
  right: 20px;
  .location {
    font-size: .8em;
    letter-spacing: 1px;
    opacity: .75;
  }
`;

const Condition = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  > * {
    font-size: 2em;
    font-style: normal;
  }
  .meteocon {
    font-style: normal;
    padding-right: 5px;
    &:before {
      font-family: 'MeteoconsRegular';
      content: attr(data-icon);
    }
  }
  .unit {
    margin-top: -5px;
    margin-left: -5px;
    &:before {
      font-family: 'MeteoconsRegular';
      content: attr(data-icon);
    }
  }
`;
  
const Weather = ({ code, temp, unit, location }) => {
  // Conditions: https://developer.yahoo.com/weather/documentation.html
  // Icons: http://www.alessioatzeni.com/meteocons/
  const icons = {
    '3': 'O',  // severe-thunderstorms
    '4': 'P',  // thunderstorms
    '11': 'R', // showers
    '12': 'R', // showers
    '13': 'U', // snow-flurries
    '16': 'W', // snow
    '18': 'X', // sleet
    '20': 'M', // foggy
    '24': 'F', // windy
    '25': 'G', // cold
    '26': 'Y', // cloudy
    '27': 'I', // mostly-cloudy-night
    '28': 'H', // mostly-cloudy-day
    '29': 'E', // partly-cloudy-night
    '30': 'H', // partly-cloudy
    '31': 'C', // clear-night
    '32': 'B', // sunny
    '33': 'C', // fair-night
    '34': 'B', // fair-day
    '39': 'O', // scattered thunderstorms
    '3200': ')', // not-available
    'C': '*', // C°
    'F': '+' // F°
  };
  
  return (
    <Container>
      <Condition>
        <i className="meteocon" data-icon={icons[code] || icons[3200]} />
        <span className="temp">{temp}</span>
        {temp && <i className="unit" data-icon={icons[unit]} />}
      </Condition>
      {location && <span className="location">{location.toUpperCase()}</span>}
    </Container>
  );
};

export default Weather;
