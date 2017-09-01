import React,{Component} from 'react';
import toggleOnOff from '../../HOC';

import './Clock.scss';

class Clock extends Component{
  componentDidMount(){
    this.timer=setInterval(()=>{this.props.updateTime()},1000);
  }
  ComponentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    const {time} =this.props;
    return(
        <span className='Clock'>{time.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})}</span>
    );
  }
}
export default toggleOnOff(Clock);
