import {LOGIN_SUCCESS} from "../constants";
import {LOGIN_FAILURE} from "../constants";
import {userService} from "../../service/user.service";

export const login = (email: string, password: string) => {
    return (dispatch: Function, getState: Function) => {
        userService.login(email, password).then(
            res => console.log(res)
        ).catch(
            error => console.log("err")
        )
    }

}
