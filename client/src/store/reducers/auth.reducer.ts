import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "../constants";

const user = localStorage.getItem('user')
let initialState = user ? {loggedIn: true, user: JSON.parse(user)} : {};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                // TODO must remember to use payload
                user: action.payload.user
            };
        case LOGIN_FAILURE:
        case LOGOUT:
            return {}
        default:
            return state;
    }
}
