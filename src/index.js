import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/App/AppContainer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import throttle from 'lodash/throttle';
import {loadFromStorage,saveToStorage} from './localStorage';
import { feedsById, quotesById, currentFeed } from '../src/utilities';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';
//import registerServiceWorker from './registerServiceWorker';

const defaultState={
  apps:{
    links:true,
    weather:true,
    clock:true,
    timer:true,
    message:true,
    focus:true,
    quote:true,
    todo:true
  },
  time:new Date(),
  timer: {
    id: null,
    active: false,
    showing: false,
    seconds: 1500,
  },
  background:loadFromStorage('background')||{
    bg:null,
    list:null,
    updateTime:null,
    option:null
  },
  focus:loadFromStorage('focus')||{text:null,
    done:false,
    set:false,
  },
  name:loadFromStorage('name')||'',
  todo:{
    todo:(loadFromStorage('todo'))||[],
    viewFilter:null,
    showList:false,
  },
  imageInfo:{
    displayInfo:false,
    image:{}
  },
  quotes: {
    feedsById,
    quotesById,
    currentFeed,
    quotesUi: {
      activeTab: 'Default',
      currentQuoteId: null,
      showNewQuote: false
    }
  }
};
const store=createStore(rootReducer,defaultState,applyMiddleware(thunk));
store.subscribe(
  throttle(()=>{
      saveToStorage('focus',store.getState().focus);
      saveToStorage('todo',store.getState().todo.todo);
      saveToStorage('name',store.getState().name);
      saveToStorage('background',store.getState().background);
      saveToStorage('react-dash-quotes', store.getState().quotes);
  },5000));
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();
