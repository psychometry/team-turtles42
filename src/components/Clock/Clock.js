import React,{Component} from 'react';
import './Clock.scss';
class Clock extends Component{
  constructor(props){
    super(props);
    this.state={Time:new Date()};
  }
  getTime=()=>{
    const  today= new Date();
    this.setState({Time:today});
  }
  componentDidMount(){
    this.timer=setInterval(()=>{this.getTime()},1000);
  }
  ComponentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    return(
        <span className='Clock'>{this.state.Time.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})}</span>
    );
  }
}

export default Clock;
