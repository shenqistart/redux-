import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
import actions from '../store/actionCreaters/counter3';
class Counter3 extends Component {
  render() {
    const {number, add, addThunk} = this.props
    console.log(this.props);
    

    
    return (
      <div>
        <span>{number}</span>
        <button onClick={add}>加1</button>
        <button onClick={addThunk}>3秒后加1</button>
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

export default connect(
  state => ({...state.counter3}),
  actions
)(Counter3)