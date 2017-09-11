import types from '../actions/TimerActionCreators';

const timer = (state = {}, action) =>{
  // console.log(state, action);
  switch (action.type) {
    case types.TOGGLE_TIMER:
      return {
        ...state,
        showing: !state.showing
      };
    case types.SET_TIMER:
      return {
        ...state,
        id: null,
        time: action.time
      };
    case types.RESET_TIMER:
      return {
        ...state,
        active: !state.active,
        time: '00:00:00',
        seconds: null
      };
    case types.UPDATE_TIMER:
      return {
        ...state,
        active: true,
        time: action.time,
        seconds: action.seconds,
        id: action.id
      };
    default:
      return state;
  }
};



export default timer;