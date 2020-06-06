/**
 * Design Principle :
 *
 * 1. Put all constants in one file to simplify the flow
 * 2. Put only necessary attributes into redux, all other parts should be
 *    stored in useState variables
 * 3.
 * **/

// auth part
export const LOGIN_SUCCESS="LOGIN_SUCCESS"
export const LOGIN_FAILURE="LOGIN_FAILURE"
export const LOGOUT="LOGOUT"

// notification part
export const SET_NOTIFICATION="SET_NOTIFICATION"
export const CLEAR_NOTIFICATION="CLEAR_NOTIFICATION"
