import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import initialState from './initialState';

export default createStore(rootReducer, initialState);
