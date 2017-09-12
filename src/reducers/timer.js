import types from '../actions/TimerActionCreators';

const timer = (state = {}, action) =>{
  // console.log(state, action);

  if (action.type === 'TOGGLE' && action.app === 'timer') {
    action.type = 'RESET_TIMER';
  }

  switch (action.type) {
    case types.TOGGLE_TIMER:
      return {
        ...state,
        showing: !state.showing
      };
    case types.SET_TIMER:
      clearInterval(state.id);

      return {
        ...state,
        id: null,
        active: false,
        time: action.time
      };
    case types.RESET_TIMER:
      clearInterval(state.id);
      
      return {
        ...state,
        id: null,
        active: false,
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