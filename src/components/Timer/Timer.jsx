import React, { Component } from 'react';
import styled from 'styled-components';
import TimeField from 'react-simple-timefield';
import toggleOnOff from '../../HOC';
import notify from './notify';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Time = styled.input`
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
  text-shadow: 0 1px 5px ${({ theme }) => theme.black};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

class Timer extends Component {
  componentDidMount() {
    this.time.select();
  }
  onTimeChange = time => {
    return this.props.onSetTimer(this.secondsLeft(time));
  }

  handleSubmit = event => {
    // console.log('play');
    // Prevent rapid submissions
    this.submit.disabled = true;
    event.preventDefault();
    this.startTimer(this.props.seconds);
  }

  handlePause = event => {
    // console.log('pause');
    event.preventDefault();
    this.props.onSetTimer(this.props.seconds);
  }

  // Convert to seconds for countdown interval
  secondsLeft = time => {
    time = time.split(':').map(Number);
    const [ hours, minutes, seconds ] = time;
    return (hours * 60 * 60) + (minutes * 60) + seconds;
  }

  // Convert back to time string to display
  timeLeft = totalSeconds => {
    let hours = Math.floor(totalSeconds / 60 / 60); 
    let minutes = Math.floor(totalSeconds / 60 % 60);
    let seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  }

  startTimer = seconds => {
    const start = Date.now();

    this.timer = setInterval(() => {
      const timerId = this.timer;

      // Change in milliseconds
      const delta = Date.now() - start;
      // Remaining seconds
      const elapsed = Math.floor(delta / 1000);
      const remaining = seconds - elapsed;

      if (!remaining) {
        notify(this.timeLeft(this.props.duration));
        this.props.onResetTimer();
      } else {
        this.props.onUpdateTimer(
          timerId,
          remaining
        );
      }
    }, 1000);
  }

  stopTimer = event => {
    // console.log('stop');
    event.preventDefault();
    // Delay reset to prevent play interference
    setTimeout(() => this.props.onResetTimer(), 700);
  }

  render() {
    const { active, id: timerId, seconds: secondsLeft } = this.props;
    const paused = secondsLeft && !timerId;
    let { hours, minutes, seconds } = this.timeLeft(secondsLeft);

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    const time = `${hours}:${minutes}:${seconds}`

    return (
      <Container>
        <form onSubmit={event => this.handleSubmit(event)}>
          <TimeField 
            value={time} 
            showSeconds
            input={<Time innerRef={comp => this.time = comp}/>}
            onChange={this.onTimeChange}
            disabled={active} 
          />
          <div className="one column centered row">
            <div className="column">
              {active && !paused &&
                <Button 
                  onClick={event => this.handlePause(event)}
                  disabled={paused} 
                >
                  <i className='ui big pause icon' />
                </Button>
              }
              {(!active || paused) &&
                <Button 
                  type="submit" 
                  innerRef={comp => this.submit = comp}
                >
                  <i className="ui big play icon"/>
                </Button>
              }
              <Button 
                onClick={event => this.stopTimer(event)}>
                <i className="ui big stop icon" />
              </Button>
            </div>
          </div>
        </form>
      </Container>
    );
  }
}

export default toggleOnOff(Timer);
