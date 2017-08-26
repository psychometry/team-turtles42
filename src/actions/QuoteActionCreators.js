export const TOGGLE_NEW_QUOTE = 'TOGGLE_NEW_QUOTE',
ADD_QUOTE = 'ADD_QUOTE', 
REMOVE_QUOTE = 'REMOVE_QUOTE',
UPDATE_QUOTE = 'UPDATE_QUOTE';

export const toggleNewQuote = () => {
  return {
    type: TOGGLE_NEW_QUOTE
  }
};

export const addQuote = (name, text, source) => {
  return {
    type: ADD_QUOTE,
    name,
    text,
    source
  };
};

export const removeQuote = (name, id) => {
  return {
    type: REMOVE_QUOTE,
    name,
    id
  }
};

export const updateQuote = (name, quote) => {
  return {
    type: UPDATE_QUOTE,
    name,
    quote
  }
};


