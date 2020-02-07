import React, {useEffect, Fragment, useState} from "react";
import styled from "styled-components";
import {AuthFormWrapper} from "../auth/style";
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {userRegisterAction} from "../../store/actionCreators/user.action.creators";
import {FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import {utilSerivce} from "../../_services/utils.service";

const CreatePostWrapper=styled.div`
display:flex;
        flex-direction: column;
         align-items:center;
         justify-content:start;
          width:auto;
        margin:100px 400px;
        background:white;
        padding-top:0;
        height:400px;
        
         h4,.post-field {
          margin-top:10px;
        }
        h4  {
        margin-top: 10px;
        }
         
         // TODO find a better way to optimize button location
        button {
        margin-top:90px !important;
        }
        
        //https://github.com/mui-org/material-ui/issues/8778
        // autowidth only works after you select one
        .select-field {
        margin-top:10px;
        width:100%;
        }
`

// TODO currently handle the form data manually to add an additional field
// In the future we may want to integrate select list with react-hooks-form

function CreatePost(props){

    const [tabs,setTabs]=useState([]);

    useEffect(
        async ()=>{
            await utilSerivce.getAllTopics().then(
                res=>{setTabs(res.data);
                    console.log(res.data)}
            )
        },[])

    const {register, handleSubmit, errors} = useForm();
    const history= useHistory();
    const dispatch=useDispatch();
    const dispatchUserRegister=(data)=>{dispatch(userRegisterAction(data))}
    const onSubmit = async data => {
        console.log('--is called--')
        console.log(data);
        // const postData={"user":{
        //         "username":data.username,
        //         "email":data.email,
        //         "password":data.password
        //     }};
        // await dispatchUserRegister(postData)
        // history.push('/');
    }

    const handleChange=(e)=>{
        console.log(e.target.value);
    }

    return (
        <Fragment>
            <CreatePostWrapper>
                <h4>Publish Your Post Here </h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'post-field'}>
                        <TextField label="email" inputRef={register({required: true, pattern: /^\S+@\S+$/i})} placeholder="Email"
                                   name="email"/>

                    </div>
                    <div className={'post-field'}>
                        <TextField label="password" inputRef={register({required: true, maxLength: 15})} placeholder="password" name="password"/>
                    </div>

                    <FormControl className={'select-field'}>
                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            autoWidth="true"
                            // value={age}
                            inputRef={register({required: true})}
                            onChange={handleChange}
                        >
                            {tabs.map(item=>{
                                return (
                                    <MenuItem value={item}>{item}</MenuItem>
                                )
                            })}

                        </Select>
                    </FormControl>

                    <Button className={'post-field'} variant="contained" color="primary" type="submit">
                        Publish Post
                    </Button>
                </form>
            </CreatePostWrapper>
        </Fragment>
    )
}

export default CreatePost
