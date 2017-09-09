import React from 'react';
import styled from 'styled-components';
import clockIcon from '../Timer/clock.svg';
import timerIcon from '../Timer/timer.svg';
// import alarmIcon from '../Timer/alarm.svg';

const Container = styled.div`
  height: 50px;
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
        src={timer ? timerIcon : clockIcon} 
        alt={timer ? 'alarm icon' : 'clock icon'} 
      />
    </Container>
  );
};

export default TimerIcon;