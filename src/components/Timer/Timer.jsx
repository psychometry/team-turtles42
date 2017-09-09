import React, { Component } from 'react';
import styled from 'styled-components';
import TimeField from 'react-simple-timefield';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Time = styled(TimeField)`
  // visibility: ${({ indicator }) => indicator ? 'visible' : 'hidden' }; 
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

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '00:25:00',
      seconds: null,
      active: false,
    };
  }
  // console.log(window.Worker);

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  onTimeChange = time => this.setState({ time });

  handleSubmit = (event) => {
    event.preventDefault();
    const seconds = this.secondsLeft(this.state.time);

    this.setState({
      active: true,
      indicator: true,
      seconds, 
    });
    this.countDown(seconds);
  };
  
  // Convert timeLeft to secondsLeft and pass to countDown
  secondsLeft(time) {
    time = time.split(':').map(Number);
    const [ hours, minutes, seconds ] = time;
    return (hours * 60 * 60) + (minutes * 60) + seconds;
  }

  timeLeft(totalSeconds) {
    if (!totalSeconds || totalSeconds === 0) {
      clearInterval(this.timer);
      return '00:00:00';
    }

    let hours = Math.floor(totalSeconds / 60 / 60); 
    let minutes = Math.floor(totalSeconds / 60 % 60);
    let seconds = totalSeconds % 60;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  countDown(seconds) {
    this.timer = setInterval(() => {
      this.setState({
        time: this.timeLeft(seconds),
        seconds: seconds--
      })
    }, 1000);
  }

  render() {
    const { time, active } = this.state;
    // console.log(time);
    
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Time value={time} showSeconds onChange={this.onTimeChange} disabled={active} />
        </form>
      </Container>
    );
  }
}

export default Timer;