import {combineReducers} from "redux";
import testReducer from './test.reducer'
import authReducer from './auth.reducer'

export default combineReducers({
    test: testReducer,
    auth: authReducer
})
