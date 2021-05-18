import React from "react";
import styled from "styled-components";
import "./meteocons/meteocons.scss";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  position: fixed;
  top: 20px;
  right: 20px;
  text-shadow: 0 1px 5px ${({ theme }) => theme.black};
  .location {
    font-size: 0.8em;
    letter-spacing: 1px;
    opacity: 0.75;
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
      font-family: "MeteoconsRegular";
      content: attr(data-icon);
    }
  }
  .unit {
    margin-top: -5px;
    margin-left: -5px;
    &:before {
      font-family: "MeteoconsRegular";
      content: attr(data-icon);
    }
  }
`;

const Weather = ({ code, temp, unit, location }) => {
  // Conditions: https://developer.yahoo.com/weather/documentation.html
  // Icons: http://www.alessioatzeni.com/meteocons/
  const icons = {
    7: "E", //Atmosphere
    3: "Q", //drizzle
    800: "B", // sunny
    8: "Y", // cloudy
    2: "P", // thunderstorms
    5: "R", // showers
    6: "W", // snow
    3200: ")", // not-available
    C: "*", // C°
    F: "+", // F°
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
