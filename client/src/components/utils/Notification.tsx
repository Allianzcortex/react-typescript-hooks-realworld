import React, {FC, Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/interfaces";
import {Message} from "semantic-ui-react";
import './util.css'
import {clearNotification} from "../../store/actions/test.action";

export const Notification: FC<{}> = () => {
    const notification = useSelector((state: RootState) => state.test)
    const dispatch = useDispatch();
    useEffect(() => {
        if (notification && notification.msg) {
            const timer = setTimeout(() => {
                dispatch(clearNotification());
            }, 1000);
            return () => clearTimeout(timer)
        }
    }, [notification])
    // TODO I have no idea what the error happened ???
    return (<div>
        {notification && notification!.msg ? <Message negative size="small">{notification!.msg}</Message> : null}
    </div>)
}
