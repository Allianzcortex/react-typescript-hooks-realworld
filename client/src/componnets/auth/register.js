import React, {useEffect, Fragment} from "react";
import {useForm} from "react-hook-form";
import {userSerivce} from "../../_services/user.service";
import {Button, TextField,Snackbar} from "@material-ui/core";
import {AuthFormWrapper} from "./style";
import {useSelector,useDispatch} from "react-redux";
import {userConstants} from "../../store/constants";
import {userRegisterAction} from "../../store/actionCreators/user.action.creators";
import {useHistory} from "react-router-dom";

// name should be in Upper case
// https://stackoverflow.com/questions/56462812/react-hook-usestate-is-called-in-function-setresults-which-is-neither-a-reac
function Register(props) {

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

    const registerForm = () => {
        return (
            <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'auth-field'}>
                    <TextField
                        label="username"
                        inputRef={register({required: true, maxLength: 80})} placeholder="username"
                        name="username" fullWidth label='username' />

                </div>
                <div className={'auth-field'}>
                    <TextField label="email" inputRef={register({required: true, pattern: /^\S+@\S+$/i})} placeholder="Email"
                               name="email"/>

                </div>
                <div className={'auth-field'}>
                    <TextField label="password" inputRef={register({required: true, maxLength: 15})} placeholder="password" name="password"/>
                </div>
                <div className={'auth-field'}>
                    <TextField label="confirm password" inputRef={register({required: true, maxLength: 15})} placeholder="confirmPassword"
                               name="confirmPassword"/>
                </div>
                <Button className={'auth-field'} variant="contained" color="primary" type="submit">
                    Register
                </Button>
            </form>
            </Fragment>
        )
    }

    return (
        <AuthFormWrapper>
            Register Form
            {registerForm()}
        </AuthFormWrapper>
    )
}

export default Register
