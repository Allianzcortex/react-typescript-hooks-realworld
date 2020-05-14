import {SET_NOTIFICATION, CLEAR_NOTIFICATION} from "../constants";

export const setNotification = (type: string, msg: string) => {
    return {
        type: SET_NOTIFICATION,
        payload: {
            // TODO check we may only need to return payload:{type,msg}?
            type: type,
            msg: msg
        }
    }
}

export const clearNotification = () => {
    return {
        type: CLEAR_NOTIFICATION
    }
}
