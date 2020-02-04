import {fromJS} from "immutable";
import {utilConstants} from '../constants/'

const defaultState = fromJS({
    // whether user exists
    currentTopic:'All', // by default its all
})


export default (state=defaultState,action)=>{
    switch (action.type) {
        case utilConstants.SET_CURRENT_TOPIC:
            // TODO check the actual result
            return state.set('currentTopic',action.data)
        default:
            return state

    }
}
