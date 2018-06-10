// 1创建仓库=》仓库中有什么state,reducer(因为业务不同是传进来的)=>仓库中交互的方法dispatch,subscibe(就是类库)
export const createStore = (reducer) => {
  // dispatch是改变，getState是获得
  let state;
  // 因为监听的组件有多个


  let listeners = [];
// 获取最新的状态
  const getState = () => state;


// 向仓库发送action，对reducer发生改变
  const dispatch = (action) => {
      // console.log(action);
      // 传入老的state和action，返回新的state
    state = reducer(state, action);
      // console.log(state);
      // 得到state后重新让所有监听者更新，执行
    listeners.forEach(listener => listener());
  };
// 订阅仓库内的状态变化事件，当状态变化的之后调用对应的监听函数
// 形成闭包
  const subscribe = (listener) => {
    listeners.push(listener);
    // 让外面的变量接收,只要接收的内容执行,就会不再订阅
    return () => {
      // 取消订阅
      listeners = listeners.filter(l => l !== listener);
    }
  };
// 先默认执行一下,获得一个空改变
  dispatch({});
// 在函数中套着函数形成闭包的设计模型
  return {
      getState, //获取最新状态对象
      dispatch, //发射action
      subscribe //订阅状态变化事件listener
  };
};
// export const combineReducers = (reducers) => {
//   return function (state = {}, action) {
//     return Object.keys(reducers).reduce((curr, key) => {
//       curr[key] = reducers[key](state[key], action);
//       return curr;
//     }, {});
//   }
// }
//
// export const compose = (...fns) => {
//   return arg => fns.reduceRight((item, next) => next(item), arg);
// }
//
// export const applyMiddleware = (...middlewares) => createStore => reducer => {
//   let store = createStore(reducer);
//   let dispatch = (action) => store.dispatch(action);
//   middlewares = middlewares.map(middleware => middleware({dispatch, getState: store.getState}));
//   dispatch = compose(...middlewares)(dispatch);
//   return {
//     ...store,
//     dispatch
//   }
//
// }