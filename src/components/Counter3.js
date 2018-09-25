import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
//我们将actionCreater抽离出来为一个对象替换引入mapDispatchToProps方法
import actions from '../store/actionCreaters/counter3';
class Counter3 extends Component {
  render() {
    const {number, add, addThunk} = this.props
    console.log(this.props);
    return (
      <div>
        <span>{number}</span>
        <button onClick={add}>加2</button>
        <button onClick={addThunk}>3秒后加2</button>
      </div>
    )
  }
}
// 可以看源码中的判断，只要你的actionCreater的集合返回的是一个对象，他的内部会自己调用内容处理
// https://github.com/reduxjs/react-redux/blob/master/src/connect/mapDispatchToProps.js
// function mapStateToProps(state) {
//   return state.counter2;
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch({type: types.INCREASE}),
//     onPromiseIncreaseClick: () => dispatch(new Promise(function (resolve, reject) {
//       setTimeout(function(){
//         resolve({type:types.INCREASE});
//       },3000);
//     }))
//   }
// }

export default connect(
  state => ({...state.counter3}),
  actions
)(Counter3)