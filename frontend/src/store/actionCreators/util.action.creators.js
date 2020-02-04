// define the real function that will be used inside function component
import {fromJS} from "immutable";
import {utilConstants} from '../constants'

// just need to return `action type` and `data`
export const setCurrentTopic=(data)=>({
    type:utilConstants.SET_CURRENT_TOPIC,
    data:fromJS(data)
})

export const setCurrentTag=(data)=>({
    type:utilConstants.SET_CURRENT_TAG,
    data:fromJS(data)
})



