import * as Types from "../action-types";
let actions = {
    add(){
        return {type:Types.INCREASE}
    },
    addThunk(){
        return function(dispatch,getState){
            let timer=setTimeout(()=>{
                dispatch({type:Types.INCREASE});
            },3000);
        }
    },
    

};
export default actions;