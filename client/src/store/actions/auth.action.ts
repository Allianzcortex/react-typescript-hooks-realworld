import {LOGIN_SUCCESS} from "../constants";
import {LOGIN_FAILURE} from "../constants";
import {userService} from "../../service/user.service";
import {setNotification} from "./test.action";


export const login = (email: string, password: string) => {

    const success = (user: any) => {
        return {type: LOGIN_SUCCESS, payload: {user}}
    }
    const failure = (error: any) => {
        return {type: LOGIN_FAILURE, payload: {error}}
    }

    return (dispatch: Function, getState: Function) => {
        userService.login(email, password).then(
            res => {
                console.log(res);
                dispatch(success(res.data));
                // TODO JSON.stringfy is important.
                window.localStorage.setItem('user', JSON.stringify(res.data));
                dispatch(setNotification('info', 'Login Successfully'));
            }
        ).catch(
            error => {
                console.log(error);
                dispatch(failure(error.toString()));
                dispatch(setNotification('error', 'Login Failure'))
            }
        )
    }

}
