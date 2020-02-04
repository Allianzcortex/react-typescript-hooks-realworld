import {fromJS} from "immutable";
import {utilConstants} from '../constants/'

const defaultState = fromJS({
    // whether user exists
    currentTopic:'All', // by default its all
    currentTag:[],
})


export default (state=defaultState,action)=>{
    switch (action.type) {
        case utilConstants.SET_CURRENT_TOPIC:
            // TODO check the actual result
            return state.set('currentTopic',action.data)
        case utilConstants.SET_CURRENT_TAG:
            // TODO check immutable.js doc for more actions
            // https://immutable-js.github.io/immutable-js/docs/#/List/insert
            // state.get('currentTag').insert(action.data)
            // TODO 看 state.getIn() 用法
            console.log(`data ${action.data}`)
            return state.set('currentTag',state.get('currentTag').push(action.data))
        default:
            return state

    }
}
