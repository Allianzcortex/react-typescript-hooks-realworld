import {combineReducers} from "redux-immutable";

// still about import order
import reducer  from './user.reducers'

export default combineReducers({
    user:reducer
})
