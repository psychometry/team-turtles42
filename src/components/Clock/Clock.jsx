import React,{Component} from 'react';
import styled from 'styled-components';
import toggleOnOff from '../../HOC';

const Container = styled.div`
  padding-bottom:30px;
  font-size: 10em;
  font-weight: 500;
  max-height:191px;
  height:191px;
`;

class Clock extends Component{
  componentDidMount(){
    this.timer=setInterval(()=>{this.props.updateTime()},1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    const {time} =this.props;
    return(
      // TODO: add 'en-GB' option
      <Container className='Clock'>
        {time.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}
      </Container>
    );
  }
}
export default toggleOnOff(Clock);
