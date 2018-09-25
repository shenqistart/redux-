import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './components/Counter';//原生connect
import Counter1 from './components/Counter1';//传统的connect写法之Thunk
import Counter2 from './components/Counter2';//传统的connect写法之promise
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';
import store from './store';
ReactDOM.render((
  <Provider store={store}>
  <div>
    <Counter/>
    <Counter1/>
    <Counter2/>
    <Counter3/>
    <Counter4/>
  </div>
    
  </Provider>
), document.getElementById('root'));

