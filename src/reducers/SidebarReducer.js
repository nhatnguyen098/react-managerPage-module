import * as types from './../constants/action_types';
const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SIDEBAR:
        state = action.items
      return [...state];
    default:
      return [...state];
  }
};
export default reducer;
