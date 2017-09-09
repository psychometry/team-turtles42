export const toggleTimer = () => {
  return {
    type: 'TOGGLE_TIMER'
  };
}
export const setTimer = time => {
  return {
    type: 'SET_TIMER',
    time
  };
}
export const resetTimer = () => {
  return {
    type: 'RESET_TIMER',
  };
}
export const updateTimer = (time, seconds, id) => {
  return {
    type: 'UPDATE_TIMER',
    time,
    seconds,
    id
  };
}

const timer = (state = {}, action) =>{
  // console.log(state, action);
  switch (action.type) {
    case 'TOGGLE_TIMER':
      return {
        ...state,
        showing: !state.showing
      };
    case 'SET_TIMER':
      return {
        ...state,
        time: action.time
      };
    case 'RESET_TIMER':
      return {
        ...state,
        active: false,
        time: '00:00:00',
        seconds: null
      };
    case 'UPDATE_TIMER':
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