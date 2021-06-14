import React, { Dispatch, Fragment, FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageType } from "../../models/types";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import { AppState } from "../../redux/store";
import { clear } from "../../redux/actions";
import { useToasts,AppearanceTypes} from "react-toast-notifications";

export const Notification = () => {
  const { messageType, messageContent } = useSelector(
    (state: AppState) => state.error
  );
  const notifyDispatch = useDispatch<Dispatch<NotificationAction>>();

  const { addToast } = useToasts();
  const handleContent = (content: object | string) => {
    let res = "";
    if (typeof content === "object") {
      Object.entries(content).map(([key, value]) => {
        res += key + " ";
        (value as string[]).forEach((msg) => {
          res += (msg+"\n");
        });
      });
    } else {
      res = content;
    }
    return res;
  };

  useEffect(() => {
    if (messageContent) {
      addToast(handleContent(messageContent), { appearance: messageType as AppearanceTypes });
      notifyDispatch(clear());
    }
  }, [messageType, messageContent]);

  // TODO: https://stackoverflow.com/questions/38524972/how-to-cast-a-string-variable-to-a-string-literal-type-in-typescript
  // check other ways of converting string to Color type

  return <Fragment></Fragment>;
};
