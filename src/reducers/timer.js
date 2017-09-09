export const toggleTimer = () => {
  return {
    type: 'TOGGLE_TIMER'
  };
}

const timer = (state = false, action) =>{
  switch (action.type) {
    case 'TOGGLE_TIMER':
      return !state;
    default:
      return state;
  }
};

export default timer;