import {fromJS} from "immutable";
import {userConstants} from '../constants/'

const defaultState = fromJS({
    // whether user exists
    currentUserName:'',
})


export default (state=defaultState,action)=>{
switch (action.type) {
    case userConstants.USER_REGISTER:
        // TODO check the actual result
        return state.set('currentUserName',action.data)
    default:
        return state

}
}
