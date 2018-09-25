import React,{Component} from 'react';
import {connect} from 'react-redux'; //新引入的扩展内容
import * as types from '../store/action-types';
class Counter1 extends Component {
  render() {
    const {number, onIncreaseClick,onThunkIncreaseClick} = this.props
    return (
      <div>
        <span>{number}</span>
        <button onClick={onIncreaseClick}>加1</button>
        <button onClick={onThunkIncreaseClick}>3秒后加1</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state.counter1;//对应的是reducer1
}
function mapDispatchToProps(dispatch) {//将actionCreater的内容放在了外面
  return {
    onIncreaseClick: () => dispatch({type: types.INCREASE}),
    
    onThunkIncreaseClick:function(){
      return dispatch(
        
        (dispatch,getState)=>{
          // 在这里做延时
          setTimeout(function(){
            dispatch({type: types.INCREASE});
          },3000)
        }
      )
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter1)