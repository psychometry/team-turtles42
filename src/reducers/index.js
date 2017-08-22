import {combineReducers} from 'redux';
import todoReducers from './todoReducers';
import focusReducer from './focusReducer';
import appReducer from './appReducer';
const rootReducer=combineReducers({app:appReducer,focus:focusReducer,todo:todoReducers});

export default rootReducer;
