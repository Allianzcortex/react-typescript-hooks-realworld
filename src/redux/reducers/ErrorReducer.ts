import produce from "immer";
import { IError, messageType } from "../../models/types";

export type ErrorAction =
  | {
      type: "SET_ERROR";
      messageType: messageType;
      messageContent: string;
    }
  | {
      type: "CLEAR_ERROR";
    };

export interface ErrorState {
  messageType: messageType;
  messageContent: string;
}

const initialState: ErrorState = {
  messageType: null,
  messageContent: "",
};

export const errorReducer = produce(
  (draft: ErrorState, action: ErrorAction) => {
    switch (action.type) {
      case "SET_ERROR":
        draft.messageType = action.messageType;
        draft.messageContent = action.messageContent;
        break;
      case "CLEAR_ERROR":
        draft.messageType = null;
        draft.messageContent = "";
        break;
    }
  },
  initialState
);
