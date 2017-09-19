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
        // duration is used in timer notification
        // pausing does not set the id to null until duration is set
        duration: state.id === null ? action.seconds: state.duration,
        seconds: action.seconds
      };
    case types.RESET_TIMER:
      clearInterval(state.id);
      
      return {
        ...state,
        id: null,
        active: false,
        duration: null,
        seconds: 1500
      };
    case types.UPDATE_TIMER:
      return {
        ...state,
        id: action.id,
        active: true,
        seconds: action.seconds
      };
    case types.TOGGLE_NOTIFICATION:
      return {
        ...state,
        settings: Object.assign({}, state.settings, {
          [action.item]: !state.settings[action.item],
        })
      };
    default:
      return state;
  }
};



export default timer;