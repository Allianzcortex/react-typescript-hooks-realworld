import produce from "immer";
import { IError, messageType } from "../../models/types";

export type NotificationAction =
  | {
      type: "SET_ERROR";
      messageType: messageType;
      messageContent: object | string;
    }
  | {
      type: "CLEAR";
    }
  | {
    type:"SET_SUCCESS",
    messageType: messageType;
    messageContent: object | string;
  }
  

export interface NotifyState {
  messageType: messageType;
  messageContent: object | string;
}

const initialState: NotifyState = {
  messageType: 'error',
  messageContent: "",
};

export const errorReducer = produce(
  (draft: NotifyState, action: NotificationAction) => {
    switch (action.type) {
      case "SET_ERROR":
        draft.messageType = action.messageType;
        draft.messageContent = action.messageContent;
        break;
      case "CLEAR":
        draft.messageType = null;
        draft.messageContent = "";
        break;
      case "SET_SUCCESS":
        draft.messageType='success';
        draft.messageContent=action.messageContent;
    }
  },
  initialState
);
