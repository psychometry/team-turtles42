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
  color: ${({ theme }) => theme.white};
  background: none;
  border: none;
  outline: none;
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

  const handlePause = event => {
    event.preventDefault();

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
        return stopTimer(null, this.timer);
      } else {
        onUpdateTimer(
          timeLeft(remaining),
          remaining,
          timerId
        );
      }
    }, 1000);
  };
  
  const stopTimer = (event, timerId) => {
    event.preventDefault();
    clearInterval(timerId);
    onResetTimer()
  }; 

  const paused = active && timerId === null;

  return (
    <Container>
      <form onSubmit={event => handleSubmit(event)}>
        <Time 
          autoFocus
          value={time} 
          showSeconds
          onChange={onTimeChange}
          disabled={active} 
        />
        <div className="one column centered row">
          <div className="column">
            {!active &&
              <Button type="submit">
                <i className="ui big play icon" />
              </Button>
            }
            {active &&
              <Button onClick={event => handlePause(event)}>
                <i className={paused ? 'ui big play icon' : 'ui big pause icon'} />
              </Button>
            }
            <Button onClick={event => stopTimer(event, timerId)}>
              <i className="ui big stop icon" />
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default toggleOnOff(Timer);
