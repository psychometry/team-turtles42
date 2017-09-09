import React from 'react';
import styled from 'styled-components';
import alarmIcon from '../Timer/alarm.svg';
import clockIcon from '../Timer/clock.svg';

const Container = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: flex-end;
  img, i {
    height: 2em;
    &:hover {
      cursor: pointer;
    }
  }
}
`;

const TimerIcon = ({ timer, onToggleTimer }) => {
  console.log(timer);
  return (
    <Container>
      {timer && 
        <img 
          onClick={onToggleTimer}
          src={alarmIcon} 
          alt="alarm icon" 
        />
      }
      {!timer &&
        <img 
          onClick={onToggleTimer}
          src={clockIcon} 
          alt="clock icon" 
        />
      }
    </Container>
  );
};

export default TimerIcon;