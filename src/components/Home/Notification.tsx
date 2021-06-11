import React, {
  Dispatch,
  Fragment,
  FunctionComponent,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageType } from "../../models/types";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import { AppState } from "../../redux/store";
import { useSnackbar } from "react-simple-snackbar";
import { clear } from "../../redux/actions";

interface IProps {
  type_: messageType;
  content: string;
}

export const Notification: FunctionComponent<IProps> = () => {
  const { messageType, messageContent } = useSelector(
    (state: AppState) => state.error
  );
  const notifyDispatch = useDispatch<Dispatch<NotificationAction>>();
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const handleContent = (content: object | string) => {
    let res = "";
    if (typeof content === "object") {
      Object.entries(content).map(([key, value]) => {
        res += key + " ";
        (value as string[]).forEach((msg) => {
          res += msg;
        });
      });
    } else {
      res = content
    }
    return res;
  };

  // const handleClose = () => {
  //   errorDiapatch({
  //     type: "CLEAR_ERROR",
  //   });
  // };
  useEffect(() => {
    if (messageContent) {
      openSnackbar(handleContent(messageContent));
      notifyDispatch(clear())
    }
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
