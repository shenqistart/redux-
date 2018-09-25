// 最原始的redux使用
import React from 'react';
import {createStore} from "../redux";
//actionType
const INCREASE='INCREASE';
const DECREASE='DECREASE';
// reducer
let reducer=(state={number:0},action)=>{
    if(action===undefined) return state;
    switch (action.type){
        case 'INCREASE':
            return {number:state.number+1};//可以写死，可以传参
            return {number:state.number+action.amount};
        case 'DECREASE':
            return {number:state.number-1};
            return {number:state.number-action.amount};
        default:
            return state;
    }
};
//这个是redux中的方法
let store=createStore(reducer);//用store的三个方法来改变状态
// actionCreater
let increace=(amount)=>({type:INCREASE,amount:amount});
let decreace=(amount)=>({type:DECREASE,amount:amount});
// let increace=()=>({type:INCREASE});
// let decreace=()=>({type:DECREASE});
// 组件：里面有createStore的三个方法getState()获得state数据,subscribe绑定渲染内容,dispatch触发store中内容的变化
export default class Counter extends React.Component{
    constructor(){
        super();
        this.state={number:store.getState().number}
        // 核心目标就是将this.state的值和redux同步,因此要把组件订阅
    }
    componentWillMount(){
        // listener
        this.unsubscribe=store.subscribe(()=>{
            this.setState({
                number:store.getState().number
            })
        })
    }
    // 组件卸载时去掉
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <div>
                <span>{this.state.number}</span>
                <button onClick={()=>store.dispatch(increace(2))}>+</button>
                <button onClick={()=>store.dispatch(decreace(2))}>-</button>
            </div>
        )
    }
}
// 改进：就是只管render，不管订阅了


