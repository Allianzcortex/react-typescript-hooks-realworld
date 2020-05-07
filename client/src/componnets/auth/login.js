import React, {useEffect, Fragment} from "react";
import {useForm} from "react-hook-form";
import {userSerivce} from "../../_services/user.service";
import {Button, TextField,Snackbar} from "@material-ui/core";
import {AuthFormWrapper} from "./style";
import {useSelector,useDispatch} from "react-redux";
import {userConstants} from "../../store/constants";
import {userRegisterAction} from "../../store/actionCreators/user.action.creators";
import {useHistory} from "react-router-dom";


function Login(props) {

    // TODO add error handler for username/email already exists error

    const {register, handleSubmit, errors} = useForm();
    const history= useHistory();
    const dispatch=useDispatch();
    const dispatchUserRegister=(data)=>{dispatch(userRegisterAction(data))}
    const onSubmit = async data => {console.log(data);
        const postData={"user":{
                "username":data.username,
                "email":data.email,
                "password":data.password
            }};
        await dispatchUserRegister(postData)
        history.push('/');
    }

    const loginForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'auth-field'}>
                    <TextField label="email" inputRef={register({required: true, pattern: /^\S+@\S+$/i})} placeholder="Email"
                               name="email"/>

                </div>
                <div className={'auth-field'}>
                    <TextField label="password" inputRef={register({required: true, maxLength: 15})} placeholder="password" name="password"/>
                </div>

                <Button className={'auth-field'} variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </form>
        )
    }

    return (
        <AuthFormWrapper>
            Login Form
            {loginForm()}
        </AuthFormWrapper>
    )
}

export default Login
