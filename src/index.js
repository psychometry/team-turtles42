import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {loadFromStorage,saveToStorage} from './localStorage';
import './index.scss';
//import registerServiceWorker from './registerServiceWorker';
const defaultState={
  app:{todo:false},
  focus:loadFromStorage('focus')||{text:null,
    done:false,
    set:false,
  },
  todo:{
    todo:(loadFromStorage('todo'))||[],
    viewFilter:null,
  }
};
const store=createStore(rootReducer,defaultState);
store.subscribe(
  function saveAll(){
      saveToStorage('focus',store.getState().focus);
      saveToStorage('todo',store.getState().todo.todo);
  }
);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();
