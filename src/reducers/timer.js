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
        seconds: action.seconds
      };
    case types.RESET_TIMER:
      clearInterval(state.id);
      
      return {
        ...state,
        id: null,
        active: false,
        seconds: 1500
      };
    case types.UPDATE_TIMER:
      return {
        ...state,
        id: action.id,
        active: true,
        seconds: action.seconds
      };
    default:
      return state;
  }
};



export default timer;