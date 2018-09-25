import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
class Counter2 extends Component {
  render() {
    const {number, onIncreaseClick, onPromiseIncreaseClick} = this.props
    return (
      <div>
        <span>{number}</span>
        <button onClick={onIncreaseClick}>加2</button>
        <button onClick={onPromiseIncreaseClick}>3秒后加2</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state.counter2;//这里用的是reducer2,一次会增加两次
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({type: types.INCREASE}),
    onPromiseIncreaseClick: () => dispatch(new Promise(function (resolve, reject) {
      setTimeout(function(){
        resolve({type:types.INCREASE});
      },3000);
    }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter2)