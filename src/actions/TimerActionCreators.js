export const types = {
  TOGGLE_TIMER: 'TOGGLE_TIMER',
  SET_TIMER: 'SET_TIMER',
  RESET_TIMER: 'RESET_TIMER',
  UPDATE_TIMER: 'UPDATE_TIMER',
  TOGGLE_NOTIFICATION: 'TOGGLE_NOTIFICATION'
};

export default types;

export const toggleTimer = () => {
  return {
    type: types.TOGGLE_TIMER
  };
}
export const setTimer = seconds => {
  return {
    type: types.SET_TIMER,
    seconds
  };
}
export const resetTimer = () => {
  return {
    type: types.RESET_TIMER
  };
}
export const updateTimer = (id, seconds) => {
  return {
    type: types.UPDATE_TIMER,
    id,
    seconds
  };
}
export const toggleNotification = item => {
  return {
    type: types.TOGGLE_NOTIFICATION,
    item
  };
}