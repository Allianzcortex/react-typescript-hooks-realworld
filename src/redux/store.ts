import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/AuthReducer";
import { errorReducer } from "./reducers/NotifyReducer";
import { devToolsEnhancer } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    auth:authReducer,
    error:errorReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,devToolsEnhancer({}))