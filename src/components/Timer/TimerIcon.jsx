import React from 'react';
import styled from 'styled-components';
import alarmIcon from '../Timer/alarm.svg';
import clockIcon from '../Timer/clock2.svg';
// import timerIcon from '../Timer/timer.svg';

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
  return (
    <Container>
      <img 
        onClick={onToggleTimer}
        src={timer ? alarmIcon : clockIcon} 
        alt={timer ? 'alarm icon' : 'clock icon'} 
      />
    </Container>
  );
};

export default TimerIcon;