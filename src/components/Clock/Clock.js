import React,{Component} from 'react';
import styled from 'styled-components';
import toggleOnOff from '../../HOC';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
//import * as TimeActionCreator from '../../actions/TimeActionCreator';
/*const mapStateToProps=(state)=>{
  return {time:state.time};
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(TimeActionCreator,dispatch);
}*/

const Container = styled.div`
  padding: 0 20px;
  font-size: 10em;
  font-weight: 500;
  letter-spacing: -5px;
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
