import * as types from './../constants/action_types';
const initialState = []

const reducer = (state = initialState,action) => {
    switch(action.type){
        case types.GET_CATEGORY:
            state = action.categories
            return [...state]
        default:
            return [...state]
    }
}
export default reducer