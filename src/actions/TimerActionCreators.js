export const types = {
  TOGGLE_TIMER: 'TOGGLE_TIMER',
  SET_TIMER: 'SET_TIMER',
  RESET_TIMER: 'RESET_TIMER',
  UPDATE_TIMER: 'UPDATE_TIMER'
};

export default types;

export const toggleTimer = () => {
  return {
    type: types.TOGGLE_TIMER
  };
}
export const setTimer = time => {
  return {
    type: types.SET_TIMER,
    time
  };
}
export const resetTimer = id => {
  return {
    type: types.RESET_TIMER
  };
}
export const updateTimer = (time, seconds, id) => {
  return {
    type: types.UPDATE_TIMER,
    time,
    seconds,
    id
  };
}