// define the real function that will be used inside function component
import {fromJS} from "immutable";
import {userConstants} from '../constants'

// just need to return `action type` and `data`
const userRegister=(data)=>({
    type:userConstants.USER_REGISTER,
    data:fromJS(data)
})



export const userRegisterAction=()=>{
    
}
