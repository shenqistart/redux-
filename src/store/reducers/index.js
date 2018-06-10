// import {combineReducers} from '../../redux';
import {combineReducers} from 'redux';
import counter1 from './counter1';
import counter2 from './counter2';
import counter3 from './counter3';
export default  combineReducers({
  counter1,
  counter2,
  counter3
})