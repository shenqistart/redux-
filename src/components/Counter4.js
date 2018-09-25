import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
// 这里可以用别人的action中的内容
import actions from '../store/actionCreaters/counter3';
// 使用@修饰符简化connect的写法，需要安装并配置"babel-plugin-transform-decorators-legacy": "^1.3.4",
// "babel-preset-stage-0": "^6.24.1",
@connect(state => ({...state.counter3}), actions)
export default class Counter4 extends Component {
  render() {
    const {number, add, addThunk} = this.props
    console.log(this.props,'ok');
    return (
      <div>
        <span>{number}</span>
        <button onClick={add}>加2</button>
        <button onClick={addThunk}>3秒后加2</button>
      </div>
    )
  }
}
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

// export default connect(
//   state => ({...state.counter3}),
//   actions
// )(Counter3)