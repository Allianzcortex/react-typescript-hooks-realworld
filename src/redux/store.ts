import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/AuthReducer";
import { errorReducer } from "./reducers/NotifyReducer";
import { devToolsEnhancer } from 'redux-devtools-extension'
import { loaderReducer } from "./reducers/LoaderReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    error:errorReducer,
    loader:loaderReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,devToolsEnhancer({}))
