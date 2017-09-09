import React, { Component } from 'react';
import styled from 'styled-components';
import TimeField from 'react-simple-timefield';

const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;
  
const Form = styled.form`
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
  width: 100px;
  margin: 0 auto;
  cursor: pointer;
`;

class Timer extends Component {
  componentWillUnmount() {
  }

  onTimeChange = time => this.props.onSetTimer(time);

  handleSubmit = event => {
    // console.log(this.input.state.value);
    event.preventDefault();
    const seconds = this.secondsLeft(this.props.time);
    this.startTimer(seconds);
  };

  // Convert to seconds for countdown interval
  secondsLeft(time) {
    time = time.split(':').map(Number);
    const [ hours, minutes, seconds ] = time;
    return (hours * 60 * 60) + (minutes * 60) + seconds;
  }

  // Convert back to time string to display
  timeLeft(totalSeconds) {
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
  }

  startTimer(totalSeconds) {
    if (!totalSeconds) return;

    const start = Date.now();

    this.timer = setInterval(() => {
      const id = this.timer;

      // Change in milliseconds
      const delta = Date.now() - start;

      // Seconds
      const elapsed = Math.floor(delta / 1000);
      const remaining = totalSeconds - elapsed;
      console.log(this.timeLeft(remaining));

      this.props.onUpdateTimer(
        this.timeLeft(remaining),
        remaining,
        id
      );
    }, 1000);
  }

  stopTimer = () => {
    console.log('stop', this.props.id);
    clearInterval(this.props.id);
    this.props.onResetTimer();
  } 

  render() {
    const { time, active } = this.props;
    
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Time 
            value={time} 
            showSeconds
            innerRef={comp => { this.input = comp }}
            onChange={this.onTimeChange}
            disabled={active} 
          />
          {!active && <Button type="submit">Start</Button>}
          {active && <Button onClick={this.stopTimer}>Stop</Button>}
        </Form>
      </Container>
    );
  }
}

export default Timer;