// define the real function that will be used inside function component
import {fromJS} from "immutable";
import {userConstants} from '../constants'
import {userSerivce} from "../../_services/user.service";

// just need to return `action type` and `data`
const userRegister=(data)=>({
    type:userConstants.USER_REGISTER,
    data:fromJS(data)
})



export const userRegisterAction=(data)=>{
        return (dispatch)=>{
            userSerivce.register(data).then(
                res=>{console.log(res)
                dispatch(userRegister(res.data))}
            ).catch(
                err=>console.log(err)
            )
        }
}
