import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';

it('renders without crashing', () => {
  const mockDefaultState={
    app:{todo:false},
    focus:{text:null,
      done:false,
      set:false,
    },
    todo:{
      todo:[],
      viewFilter:null,
    }
  };
  const mockReducer=(state)=>{
    return state;
  }
  const mockStore=createStore(mockReducer, mockDefaultState);
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={mockStore}><App /></Provider>, div);
});
