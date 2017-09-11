import React from 'react';
import styled from 'styled-components';
import TimeField from 'react-simple-timefield';
import bell from './bell.wav';
import toggleOnOff from '../../HOC';

const notification = new Audio(bell);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Display = styled.div`
  position: relative;
  input {
    opacity: ${({ paused }) => paused ? .75 : 1 };
  }
  &:hover input {
    opacity: ${({ active }) => active ? .75 : 1};
  }
  &:hover i {
    visibility: visible;
  }
`;

const Time = styled(TimeField)`
  font-family: inherit;
  width: 100% !important;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  font-size: 10em;
  font-weight: 500;
  background: transparent;
  color: ${({ theme}) => theme.white };
  text-shadow: 0 1px 5px ${({ theme }) => theme.black};
  border: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin: 0 auto !important;
`;

const PauseIcon = styled.i`
  visibility: hidden;
  padding-right: 5px;
  position: absolute;
  top: 60px;
  left: 320px;
  cursor: pointer;
`;

const Timer = ({ 
  time, 
  active, 
  id: timerId, 
  seconds,
  onSetTimer, 
  onResetTimer, 
  onUpdateTimer 
}) => {
  const onTimeChange = time => onSetTimer(time);

  const handleSubmit = event => {
    event.preventDefault();
    const seconds = secondsLeft(time);
    startTimer(seconds);
  };

  const handlePause = () => {
    if (timerId) {
      clearInterval(timerId);
      onSetTimer(time);
    } else {
      startTimer(seconds);      
    }
  };

  // Convert to seconds for countdown interval
  const secondsLeft = time => {
    time = time.split(':').map(Number);
    const [ hours, minutes, seconds ] = time;
    return (hours * 60 * 60) + (minutes * 60) + seconds;
  };

  // Convert back to time string to display
  const timeLeft = (totalSeconds) => {
    let hours = Math.floor(totalSeconds / 60 / 60); 
    let minutes = Math.floor(totalSeconds / 60 % 60);
    let seconds = totalSeconds % 60;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  const startTimer = (totalSeconds) => {
    // Set default start time
    if (!totalSeconds) {
      totalSeconds = 1500;
    }
    
    notification.load();
    const start = Date.now();

    this.timer = setInterval(() => {
      const timerId = this.timer;

      // Change in milliseconds
      const delta = Date.now() - start;
      // Remaining seconds
      const elapsed = Math.floor(delta / 1000);
      const remaining = totalSeconds - elapsed;

      if (!remaining) {
        notification.play();
        return stopTimer(this.timer);
      } else {
        onUpdateTimer(
          timeLeft(remaining),
          remaining,
          timerId
        );
      }
    }, 1000);
  };
  
  const stopTimer = timerId => {
    clearInterval(timerId);
    onResetTimer()
  }; 

  const paused = active && timerId === null;

  return (
    <Container>
      <form onSubmit={event => handleSubmit(event)}>
        <Display paused={paused} active={active}>
        <Time 
          autoFocus
          value={time} 
          showSeconds
          onChange={onTimeChange}
          disabled={active} 
        />
        {active &&
          <PauseIcon
            className={paused ? "huge play icon" : "huge pause icon"}
            onClick={() => handlePause()}
          />
        }
        </Display>
        <div className="one column centered row">
          <div className="column">
            {!active && 
              <Button className="ui mini green button" type="submit">
                Start
              </Button>}
            {active &&  
              <Button 
                className="ui mini red button" 
                onClick={() => stopTimer(timerId)}
              >
                Reset
              </Button>
            }
          </div>
        </div>
      </form>
    </Container>
  );
}

export default toggleOnOff(Timer);
