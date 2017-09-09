import React from 'react';
import styled from 'styled-components';
import TimeField from 'react-simple-timefield';

const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;
  
const Time = styled(TimeField)`
  width: 600px !important;
  margin: 0 auto;
  text-align: center;
  font-size: 10em;
  background: transparent;
  color: ${({ theme}) => theme.white };
  border: none;
  &:focus {
    outline: none;
  }
  `;
const Button = styled.button`
  margin: 0 auto !important;
`;

const Timer = ({ 
  time, 
  active, 
  id, 
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

  // Convert to seconds for countdown interval
  const secondsLeft = time => {
    time = time.split(':').map(Number);
    const [ hours, minutes, seconds ] = time;
    return (hours * 60 * 60) + (minutes * 60) + seconds;
  };

  // Convert back to time string to display
  const timeLeft = totalSeconds => {
    if (!totalSeconds) {
      clearInterval(this.timer);
      this.stopTimer();
    }

    let hours = Math.floor(totalSeconds / 60 / 60); 
    let minutes = Math.floor(totalSeconds / 60 % 60);
    let seconds = totalSeconds % 60;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  const startTimer = (totalSeconds) => {
    if (!totalSeconds) return;

    const start = Date.now();

    this.timer = setInterval(() => {
      const id = this.timer;

      // Change in milliseconds
      const delta = Date.now() - start;

      // Seconds
      const elapsed = Math.floor(delta / 1000);
      const remaining = totalSeconds - elapsed;
      console.log(timeLeft(remaining));

      onUpdateTimer(
        timeLeft(remaining),
        remaining,
        id
      );
    }, 1000);
  };

  const stopTimer = () => {
    console.log('stop', id);
    clearInterval(id);
    onResetTimer();
  }; 

  return (
    <Container>
      <form onSubmit={event => handleSubmit(event)}>
        <Time 
          value={time} 
          showSeconds
          onChange={onTimeChange}
          disabled={active} 
        />
        <div class="one column centered row">
          <div class="column">
            {!active && <Button className="ui mini green button" type="submit">Start</Button>}
            {active && <Button className="ui mini red button" onClick={stopTimer}>Stop</Button>}
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Timer;