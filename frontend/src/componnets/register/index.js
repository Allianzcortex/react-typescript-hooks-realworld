import React, {useEffect, Fragment} from "react";
import {useForm} from "react-hook-form";
import {userSerivce} from "../../_services/user.service";
import {Button, TextField} from "@material-ui/core";
import {RegisterWrapper} from "./style";
import {useSelector,useDispatch} from "react-redux";
import {userConstants} from "../../store/constants";

// name should be in Upper case
// https://stackoverflow.com/questions/56462812/react-hook-usestate-is-called-in-function-setresults-which-is-neither-a-reac
function Register(props) {

    // useEffect(() => {
    //     userSerivce.register()
    // }, [])
    const {register, handleSubmit, errors} = useForm();
    const dispatch=useDispatch();
    const onSubmit = data => {console.log(data);
            dispatch({
                type:userConstants.USER_REGISTER,
                data:'aaa'
            })
    }

    const registerForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'register-field'}>
                    <TextField inputRef={register({required: true, maxLength: 80})} placeholder="username"
                               name="username"/>

                </div>
                <div className={'register-field'}>
                    <TextField inputRef={register({required: true, pattern: /^\S+@\S+$/i})} placeholder="Email"
                               name="email"/>

                </div>
                <div className={'register-field'}>
                    <TextField inputRef={register({required: true, maxLength: 15})} placeholder="password" name="password"/>
                </div>
                <div className={'register-field'}>
                    <TextField inputRef={register({required: true, maxLength: 15})} placeholder="confirmPassword"
                               name="confirmPassword"/>
                </div>
                <Button className={'register-field'} variant="contained" color="primary" type="submit">
                    Register
                </Button>
            </form>
        )
    }

    return (
        <RegisterWrapper>
            {registerForm()}
        </RegisterWrapper>
    )
}

export default Register
