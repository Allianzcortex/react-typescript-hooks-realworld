import { Snackbar } from "@material-ui/core";
import Alert, { Color } from "@material-ui/lab/Alert";
import React, { Dispatch, Fragment, FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageType } from "../../models/types";
import { ErrorAction } from "../../redux/reducers/ErrorReducer";
import { AppState } from "../../redux/store/store";

interface IProps {
  type_: messageType;
  content: string;
}

export const Notification: FunctionComponent<IProps> = () => {
  const { messageType, messageContent } = useSelector(
    (state: AppState) => state.error
  );
  const errorDiapatch = useDispatch<Dispatch<ErrorAction>>()

  const handleClose = () => {
      errorDiapatch({
          type:'CLEAR_ERROR'
      })
  };
  useEffect(() => {
    console.log("message is---");
    console.log(messageContent);
  }, [messageType,messageContent]);

  // TODO: https://stackoverflow.com/questions/38524972/how-to-cast-a-string-variable-to-a-string-literal-type-in-typescript
  // check other ways of converting string to Color type

  if (!messageContent) {
      return <div></div>
  }

  return (
    <Fragment>
      <Snackbar
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={true}
        autoHideDuration={2000}
      >
        <Alert severity={messageType as Color} variant="filled">
          {messageContent}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};
