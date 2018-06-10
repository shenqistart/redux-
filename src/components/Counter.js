// 除了render，以及import的需要将组件转移过来，之后导出
// export default class Counter extends React.Component
// ReactDOM.render(<Counter/>,document.getElementById('root'));
import React from 'react';
import {createStore} from "../redux";

const INCREASE='INCREASE';
const DECREASE='DECREASE';
let reducer=(state={number:0},action)=>{

    if(action===undefined) return state;
    switch (action.type){
        case 'INCREASE':
            return {number:state.number+action.amount};
        case 'DECREASE':
            return {number:state.number-action.amount};
        default:
            return state;
    }
    // return state;
};

let store=createStore(reducer);//用store的三个方法来改变状态
let increace=(amount)=>({type:INCREASE,amount:amount});
let decreace=(amount)=>({type:DECREASE,amount:amount});


export default class Counter extends React.Component{
    constructor(){
        super();
        this.state={number:store.getState().number}
        // 核心目标就是将this.state的值和redux同步,因此要把组件订阅
    }
    componentWillMount(){
        // ?listener是函数
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
                <p>{this.state.number}</p>
                <button onClick={()=>store.dispatch(increace(2))}>+</button>
                <button onClick={()=>store.dispatch(decreace(2))}>-</button>
            </div>
        )
    }
}
// 改进：就是只管render，不管订阅了


