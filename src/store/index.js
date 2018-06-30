import {createStore,applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
import reducer from './reducers';
let store = createStore(reducer,applyMiddleware(Logger,Thunk,Promise));
window._store = store; //为了测试用
export default store;