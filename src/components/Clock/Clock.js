import React,{Component} from 'react';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
//import * as TimeActionCreator from '../../actions/TimeActionCreator';
import './Clock.scss';
/*const mapStateToProps=(state)=>{
  return {time:state.time};
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(TimeActionCreator,dispatch);
}*/
class Clock extends Component{
/*  constructor(props){
    super(props);
    this.state={Time:new Date()};
  }
  getTime=()=>{
    const  today= new Date();
    this.setState({Time:today});
  }*/
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
export default Clock;
