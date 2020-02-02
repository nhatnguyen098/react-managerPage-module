import { combineReducers } from "redux";
import sidebarReducer from './SidebarReducer'
import productReducer from './ProductReducer'
import categoryReducer from './CategoryReducer'
const reducer = combineReducers({
    sidebarReducer,
    productReducer,
    categoryReducer
})
export default reducer