import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';

// 3 items required

const initialState={};
const middleWare=[thunk];
// check this link : https://stackoverflow.com/questions/52800877/has-anyone-came-across-this-error-in-ts-with-redux-dev-tools-property-redux
// to make typescript compatible with redux tools
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store=createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWare))
)
