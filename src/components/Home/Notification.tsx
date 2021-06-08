import React, {
  Dispatch,
  Fragment,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageType } from "../../models/types";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import { AppState } from "../../redux/store";
import { useSnackbar } from "react-simple-snackbar";

interface IProps {
  type_: messageType;
  content: string;
}

export const Notification: FunctionComponent<IProps> = () => {
  const { messageType, messageContent } = useSelector(
    (state: AppState) => state.error
  );
  const errorDiapatch = useDispatch<Dispatch<NotificationAction>>();
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const handleContent = (content: object | string) => {
    let res = "";
    if (typeof content === "object") {
      Object.entries(content).map(([key, value]) => {
        res += key;
        res += (value as string[])[0];
      });
    }
    return res;
  };

  // const handleClose = () => {
  //   errorDiapatch({
  //     type: "CLEAR_ERROR",
  //   });
  // };
  useEffect(() => {
    console.log("message is---");
    console.log(messageContent);
    openSnackbar(handleContent(messageContent));
  }, [messageType, messageContent]);

  // TODO: https://stackoverflow.com/questions/38524972/how-to-cast-a-string-variable-to-a-string-literal-type-in-typescript
  // check other ways of converting string to Color type

  if (!messageContent) {
    return <div></div>;
  }

  return (
    <Fragment>
      <div></div>
    </Fragment>
  );
};
