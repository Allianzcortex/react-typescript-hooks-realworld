import React, {FC} from "react";
import {Button, Label, Input, Table} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {testAction} from '../store/actions'
import {Fragment} from 'react'
import {RootState} from "../types/interfaces";
import {Message} from "semantic-ui-react";

type Props = {
    label?: string;
    count?: number;
    onIncrement?: () => void;
};

export const Test: FC<Props> = () => {


    const {setNotification, clearNotification} = testAction
    const dispatch = useDispatch();
    const notification=useSelector((state:RootState) =>state.test)
    return (
        <Fragment>
            <div>Test</div>
            {notification?<Message negative>{notification.msg}</Message>:null}
            <button onClick={()=>dispatch(setNotification("error", "errormsg"))}>
                setError
            </button>
            <button onClick={()=>dispatch(clearNotification())}>clearError</button>
        </Fragment>
    )
}
