import {SET_NOTIFICATION, CLEAR_NOTIFICATION} from "../constants";

const initialState = {
    type: null,
    msg: null
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                type: action.payload.type,
                msg: action.payload.msg
            }
        case CLEAR_NOTIFICATION:
            return {type:null,msg:null}
        // Should not forget default return state
            // or the whole reducer could not be initialized properly
        default:
            return state
    }

}
