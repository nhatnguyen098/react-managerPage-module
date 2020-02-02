import * as types from './../constants/action_types';
const initialState = []
const reducer = (state= initialState, action)=>{
    switch(action.type){
        case types.GET_PRODUCT:
            state = action.prs
            return [...state]
        case types.CREATE_PRODUCT:
            state.push(action.prs)
            return [...state]
        case types.UPDATE_PRODUCT:
            var arr = [...state]
            console.log(action.obj)
            arr.forEach(s=>{
                if(s.id === action.obj.id){
                    arr[arr.indexOf(s)] = action.obj
                }
            })
            state = [...arr]
            return [...state]
        case types.REMOVE_PRODUCT:
            var arr = [...state]
            for(var i = 0; i < arr.length ; i++){
                if(arr[i].id === action.id){
                    arr.splice(i,1)
                }
            }
            state = arr
            return [...state]
        default:
            return [...state]
    }
}
export default reducer