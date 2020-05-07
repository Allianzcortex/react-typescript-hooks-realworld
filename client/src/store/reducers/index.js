import {combineReducers} from "redux-immutable";

// still about import order
import userReducer  from './user.reducers'
import utilReducer from './util.reducers'

export default combineReducers({
    auth:userReducer,
    util:utilReducer
})
