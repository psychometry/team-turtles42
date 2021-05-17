import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/App/AppContainer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import throttle from 'lodash/throttle';
import {loadFromStorage,saveToStorage} from './localStorage';
import { feedsById, quotesById, currentFeed, loadTimerSettings } from './utilities';
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
    duration: null,
    seconds: 1500,
    settings: {
      bell: loadTimerSettings().bell, 
      desktop: loadTimerSettings().desktop
    }
  },
  background:loadFromStorage('react-dash-background')||{
    bg:null,
    list:null,
    updateTime:null,
    option:null
  },
  focus:loadFromStorage('react-dash-focus')||{text:null,
    done:false,
    set:false,
  },
  name:loadFromStorage('react-dash-name')||'',
  todo:{
    todo:(loadFromStorage('react-dash-todo'))||[],
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
      saveToStorage('react-dash-focus',store.getState().focus);
      saveToStorage('react-dash-todo',store.getState().todo.todo);
      saveToStorage('react-dash-name',store.getState().name);
      saveToStorage('react-dash-background',store.getState().background);
      saveToStorage('react-dash-quotes', store.getState().quotes);
      saveToStorage('react-dash-timer-settings', store.getState().timer.settings);
  },5000));
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();
