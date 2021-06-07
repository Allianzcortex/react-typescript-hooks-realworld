import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { messageType } from "../../models/types";
import { AppState } from "../../redux/store/store";

interface IProps {
    type_:messageType;
    content:string;
}


export const Notification:FunctionComponent<IProps>=({
    type_,
    content
})=> {
    const { messageType,messageContent } = useSelector((state: AppState) => state.error);
    const handleClose=()=>{}
    useEffect((
    )=>{
        console.log("message is---")
        console.log(messageContent)
    },[])

    return  <Fragment><Snackbar  onClose={handleClose}  anchorOrigin={{ vertical:'top',horizontal:'center' }} open={true} autoHideDuration={6000}>
    <Alert  severity="error" variant="filled">
      This is a success message!
    </Alert>
  </Snackbar>
  </Fragment>
}